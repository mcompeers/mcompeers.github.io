import Layout from "@/components/Layout";
import Head from "next/head";
import LinkCard from "@/components/cards/LinkCard";
import { getData } from "@/lib/getData";
import TitleBar from "@/components/TitleBar";
import Title from "@/components/Title";
import Body from "@/components/Body";
import { compareDesc, getMonth } from "date-fns";
import { groupBy } from "lodash";
import { months } from "@/lib/months";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export default function Project({ projects }) {
  const projectsByYear = groupBy(projects, (p) => p.date.substr(0, 7));

  return (
    <Layout>
      <Head>
        <title>Projects</title>
      </Head>
      <Body>
        <TitleBar>
          <Title name={"Projects"} />
        </TitleBar>
        <section className="grid grid-cols-1 gap-4">
          {Object.keys(projectsByYear)
            .sort((a, b) => compareDesc(new Date(a), new Date(b)))
            .map((key) => (
              <div key={key} className="mb-4 flex flex-col gap-2">
                <div className="flex items-center gap-4">
                  <span className="opacity-50">
                    {`${months[getMonth(new Date(key))]} ${key.split("-")[0]}`}
                  </span>
                  <div className="h-[1px] flex-grow bg-white opacity-10"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {projectsByYear[key].map((proj) => (
                    <LinkCard key={proj.id} href={`projects/${proj.id}`}>
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-bold">{proj.name}</div>
                        <ChevronRightIcon className="h-6 w-6" />
                      </div>
                    </LinkCard>
                  ))}
                </div>
              </div>
            ))}
        </section>
      </Body>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = await getData("data/projects.json");

  return {
    props: {
      projects: projects,
    },
  };
}
