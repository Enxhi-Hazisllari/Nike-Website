import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
    document.body.style.overflow = nav ? "scroll" : "hidden";
  };

  const navClass = nav
    ? "ease-in duration-300 fixed left-0 top-0 w-full h-screen bg-slate-50 px-4 py-7 flex-col z-20"
    : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-20";

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span>/</span>
          <a href="/">Explore now</a>
        </div>
        <div className="hidden max-lg:block z-50">
          <img
            src={hamburger}
            alt="hamburger icon"
            onClick={toggleNav}
            width={25}
            height={25}
          />
        </div>
        <div className={navClass}>
          <ul className="flex flex-col fixed w-full h-full items-center justify-center">
            {navLinks.map((item) => (
              <li key={item.label} className="p-8">
                <a
                  href={item.href}
                  onClick={toggleNav}
                  className="font-bold text-3xl text-coral-red"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
