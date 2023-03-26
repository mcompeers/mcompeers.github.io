import Layout from "@/components/Layout";
import Head from "next/head";
import fsPromises from "fs/promises";
import path from "path";
import SkillCard from "@/components/cards/SkillCard";
import { useState } from "react";
import TitleBar from "@/components/TitleBar";
import Title from "@/components/Title";
import Body from "@/components/Body";

export default function Skills({ skills }) {
  const [filter, setFilter] = useState("");

  const handleFilterChange = (ev) => {
    setFilter(ev.target.value);
  };

  const filteredSkills = skills.filter((s) =>
    s.name.toLowerCase().includes(filter)
  );

  return (
    <Layout title={"Skills"}>
      <Body>
        <TitleBar>
          <input
            type="text"
            value={filter}
            onChange={handleFilterChange}
            placeholder="Search"
            className="w-full rounded-md bg-transparent p-2 ring-1 ring-slate-500 md:w-fit"
          />
        </TitleBar>
        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {filteredSkills.map((skill) => (
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
