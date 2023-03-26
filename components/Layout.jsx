import Head from "next/head";
import NavBar from "./NavBar";

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>title</title>
      </Head>
      <div className="relative min-h-screen bg-gradient-to-t from-slate-900 to-slate-800 text-white">
        <NavBar />
        <div className="container mx-auto">
          <header className="my-10">
            <h1 className="mx-auto  w-fit text-3xl font-bold lg:text-5xl">
              {title}
            </h1>
          </header>
          <main className="overflow-auto px-3">
            <div>{children}</div>
          </main>
          <footer className="mt-10 ">Maxim Compeers 2023</footer>
        </div>
      </div>
    </>
  );
}
