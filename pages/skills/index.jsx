import Layout from "@/components/Layout";
import fsPromises from "fs/promises";
import path from "path";
import SkillCard from "@/components/cards/SkillCard";
import Body from "@/components/Body";
import Head from "next/head";

export default function Skills({ skills }) {
  const spotlight = skills.filter((s) => s.spotlight);
  const other = skills.filter((s) => !s.spotlight);

  return (
    <Layout title={"Skills"}>
      <Head></Head>
      <Body>
        <section className="">
          <h3>Spotlight</h3>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:mx-16">
            {spotlight.map((skill) => (
              <SkillCard special key={skill.id} skill={skill} />
            ))}
          </div>
        </section>
        <section className="">
          <h3>Other skills</h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {other.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </section>
      </Body>
    </Layout>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data/skills.json");
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData);

  return {
    props: {
      skills: objectData,
    },
  };
}
