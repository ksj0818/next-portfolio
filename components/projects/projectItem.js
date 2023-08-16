import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({ data }) {
  const title = data.properties.이름.title[0].plain_text;
  const tags = data.properties.tag.multi_select;
  const description = data.properties.description.rich_text[0].text.content;
  const imgSrc = data.cover.external ? data.cover.external.url : data.cover.file.url;
  const start = data.properties.workdays.date.start;
  const end = data.properties.workdays.date.end;
  const domain = data.properties.domain.url;
  const calculateDate = (start, end) => {
    const startDateArray = start.split("-");
    const endDateArray = end.split("-");

    let startDate = new Date(startDateArray[0], startDateArray[1], startDateArray[2]);
    let endDate = new Date(endDateArray[0], endDateArray[1], endDateArray[2]);

    const diffInMs = Math.abs(endDate - startDate);
    const result = diffInMs / (1000 * 60 * 60 * 24);

    return result;
  };

  return (
    <Link href={domain}>
      <div className="cursor-pointer project-card">
        <Image
          className="max-h-[200px] rounded-t-xl"
          src={imgSrc}
          layout="responsive"
          width="100%"
          height="50px"
          objectFit="cover"
          quality={100}
          alt="cover image"
        />
        <div className="flex flex-col items-start justify-center px-4 my-1">
          <h1 className="my-2 text-lg font-bold sm:text-2xl md:text-3xl">{title}</h1>
          <h2 className="text-lg">{description}</h2>
          <h3 className="text-sm">
            작업 기간 : {`${start}~${end}`}({calculateDate(start, end)}일)
          </h3>
          <div className="flex my-1 truncate gap-x-2">
            {tags.map((tag) => (
              <p
                key={tag.id}
                className={`rounded-md text-slate-700/90 bg-sky-400 truncate dark:bg-sky-700 dark:text-white/90 px-1`}
              >
                {tag.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
