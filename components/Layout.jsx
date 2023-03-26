import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen overflow-auto bg-gradient-to-t from-slate-900 to-slate-800 text-white">
      <Head>
        <title>Maxim Compeers</title>
      </Head>
      <main className="container mx-auto px-3">
        <div className="my-10">
          <h1 className="text-3xl font-bold lg:text-5xl">Maxim compeers</h1>
        </div>
        <div className="item-center flex gap-4">
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/"}>About</NavLink>
          <NavLink href={"/skills"}>Skills</NavLink>
          <NavLink href={"/projects"}>Projects</NavLink>
        </div>
        <div className="h-0.1 bg-slate-50"></div>
        <div>{children}</div>
      </main>
    </div>
  );
}
