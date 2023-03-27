import NavLink from "./NavLink";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

export default function NavBar({ onDarkModeChange, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    onDarkModeChange(!darkMode);
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-slate-100/60 p-4 backdrop-blur-md dark:bg-neutral-800/60">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Maxim Compeers</div>
          <div className="flex items-center gap-6">
            <button className="h-6 w-6 md:hidden" onClick={toggleDarkMode}>
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
            <button className="h-6 w-6 md:hidden" onClick={toggleMenu}>
              {menuOpen ? <XMarkIcon /> : <Bars3Icon />}
            </button>
          </div>
        </div>
        <nav
          className={`flex flex-col gap-4 md:flex md:flex-row md:items-center ${
            menuOpen ? "flex" : "hidden"
          }`}
        >
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/"}>About</NavLink>
          <NavLink href={"/skills"}>Skills</NavLink>
          <NavLink href={"/projects"}>Projects</NavLink>
        </nav>
        <div className="hidden flex-grow items-center justify-end md:flex">
          <button className="h-6 w-6" onClick={toggleDarkMode}>
            {darkMode ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}
