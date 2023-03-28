import NavLink from "./NavLink";
import {
  Bars3Icon,
  XMarkIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import ToggleButton from "./buttons/ToggleButton";

export default function NavBar({ onDarkModeChange, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDarkMode = () => {
    onDarkModeChange(!darkMode);
  };

  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-slate-200/60 p-4 shadow-lg backdrop-blur-md dark:bg-zinc-800/60">
      <div className="container mx-auto flex flex-col gap-4 md:flex-row md:items-center">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Maxim Compeers</div>
          <div className="flex items-center gap-6">
            <ToggleButton
              onClick={toggleDarkMode}
              className="md:hidden"
              value={darkMode}
              iconOff={<SunIcon />}
              iconOn={<MoonIcon />}
            />
            <ToggleButton
              onClick={toggleMenu}
              className="md:hidden"
              value={menuOpen}
              iconOff={<Bars3Icon />}
              iconOn={<XMarkIcon />}
            />
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
          <ToggleButton
            onClick={toggleDarkMode}
            value={darkMode}
            iconOff={<SunIcon />}
            iconOn={<MoonIcon />}
          />
        </div>
      </div>
    </div>
  );
}
