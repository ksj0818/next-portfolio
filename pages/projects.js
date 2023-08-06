import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID } from "../config";
import ProjectItem from "../components/projects/projectItem";

export default function Projects({ projects }) {
  return (
    <>
      <Layout>
        <Head>
          <title>다음왕 포트폴리오 | 프로젝트</title>
          <meta name="description" content="다음왕의 프로젝트 목록" />
        </Head>
        <div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.results.map((aproject) => (
            <ProjectItem data={aproject} key={aproject.id} />
          ))}
        </div>
      </Layout>
    </>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "workdays",
          direction: "descending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);
  const projects = await res.json();

  return {
    props: { projects },
  };
}
