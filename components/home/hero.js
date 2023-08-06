import Link from "next/link";
import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 title-font sm:text-4xl">
          안녕하세요 다음왕입니다!
          <br className="hidden lg:inline-block" />
          오늘도 즐거운 코딩하세요!
        </h1>
        <p className="mb-8 leading-relaxed">
          고행을 영원히 가는 바로 창공에 있을 그것은 내는 우리 황금시대다. 청춘을 품고 끝까지 산야에 모래뿐일 인생의
          그림자는 웅대한 보라. 간에 눈이 이상 실로 교향악이다. 청춘을 살 하는 불어 미묘한 가치를 싶이 부패뿐이다.
          없으면, 쓸쓸한 우리 생생하며, 끓는다. 가는 간에 얼마나 불러 위하여 보라. 자신과 석가는 구하지 눈에 뭇 이것은
          동력은 철환하였는가? 이상의 들어 트고, 꽃이 눈에 하는 끓는 청춘 밥을 끓는다. 듣기만 있는 대한 부패를 생생하며,
          살 것이다.
        </p>
        <div className="flex justify-center">
          <Link href="/projects">
            <a className="inline-flex px-6 py-2 text-lg font-bold text-white bg-indigo-500 border-0 rounded dark:text-white focus:outline-none hover:bg-indigo-600">
              프로젝트 보러가기
            </a>
          </Link>
        </div>
      </div>
      <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <Animation />
      </div>
    </>
  );
}
