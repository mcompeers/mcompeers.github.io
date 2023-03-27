import Head from "next/head";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";

export default function Layout({ children, title }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("dark");
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>{title ? "MC | " + title : "Maxim Compeers"}</title>
      </Head>
      <div
        className="relative h-screen overflow-auto dark:bg-neutral-900 dark:text-white"
        style={{ colorScheme: darkMode ? "dark" : "light" }}
      >
        <NavBar onDarkModeChange={setDarkMode} darkMode={darkMode} />
        <div className="container mx-auto">
          <header className="mb-10 mt-10">
            <h1 className="mx-auto  w-fit text-3xl font-bold lg:text-5xl">
              {title}
            </h1>
          </header>
          <main className=" px-3">{children}</main>
          <footer className="mt-10 "></footer>
        </div>
      </div>
    </>
  );
}
