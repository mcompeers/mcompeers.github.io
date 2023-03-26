import Link from "next/link";
import IconButton from "./buttons/IconButton";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-slate-50 p-4 dark:bg-slate-900">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Maxim Compeers</div>
          <button className="h-6 w-6 md:hidden" onClick={toggleMenu}>
            {menuOpen ? <XMarkIcon /> : <Bars3Icon />}
          </button>
        </div>
        <div
          className={`flex flex-col gap-4 md:flex md:flex-row md:items-center ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/"}>About</NavLink>
          <NavLink href={"/skills"}>Skills</NavLink>
          <NavLink href={"/projects"}>Projects</NavLink>
        </div>
      </div>
    </div>
  );
}
