import Layout from "@/components/Layout";
import fsPromises from "fs/promises";
import path from "path";
import SkillCard from "@/components/cards/SkillCard";
import Body from "@/components/Body";
import Head from "next/head";

export default function Skills({ skills }) {
  return (
    <Layout title={"Skills"}>
      <Head></Head>
      <Body>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
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
