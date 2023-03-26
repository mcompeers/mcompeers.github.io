import Body from "@/components/Body";
import Layout from "@/components/Layout";
import Title from "@/components/Title";
import TitleBar from "@/components/TitleBar";
import { getData } from "@/lib/getData";
import Head from "next/head";
import {
  Bars3BottomLeftIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";
import Card from "@/components/cards/Card";

export default function Project({ project }) {
  return (
    <Layout title={project.name}>
      <Head>
        <title>Project {project.name}</title>
      </Head>
      <Body>
        <TitleBar>
          <Title name={"Back"} />
        </TitleBar>
        <section className="my-2 flex flex-col gap-4">
          {/* <div className="col-span-4 flex flex-col gap-2">
            <span className="text-4xl font-bold">{project.name}</span>
          </div> */}
          <Card className="flex flex-col gap-2 p-2 md:col-span-2 lg:col-span-4">
            <span className="flex items-center gap-2 text-lg opacity-50">
              <Bars3BottomLeftIcon className="h-6 w-6" /> Description
            </span>
            <span className="text-justify text-lg">{project.description}</span>
          </Card>
          <Card className="flex flex-col gap-2 p-2 md:col-span-2 lg:col-span-4">
            <span className="flex items-center gap-2 text-lg opacity-50">
              <Square3Stack3DIcon className="h-6 w-6" /> Tech Stack
            </span>
            <div className="grid grid-cols-1 divide-y divide-white divide-opacity-50 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
              <div className="flex flex-col items-center gap-2 p-4">
                {project.techStack.frontend.map((e) => (
                  <span key={e}>{e}</span>
                ))}
              </div>
              <div className="flex flex-col items-center gap-2 p-4">
                {project.techStack.backend.map((e) => (
                  <span key={e}>{e}</span>
                ))}
              </div>
              <div className="flex flex-col items-center gap-2 p-4">
                {project.techStack.deployment.map((e) => (
                  <span key={e}>{e}</span>
                ))}
              </div>
            </div>
          </Card>
        </section>
      </Body>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const projects = await getData("data/projects.json");

  return {
    props: {
      project: projects.find((proj) => proj.id === params.id),
    },
  };
}

export async function getStaticPaths() {
  const projects = await getData("data/projects.json");

  return {
    paths: projects.map((proj) => ({ params: { id: proj.id } })),
    fallback: false,
  };
}
