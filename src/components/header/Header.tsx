import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    const handleHeaderScroll = () => {
      const header = document.getElementById("Header");
      if (window.scrollY > 100) {
        header?.classList.add("bg-[rgb(20,20,20)]");
      } else {
        header?.classList.remove("bg-[rgb(20,20,20)]");
      }
    };

    window.addEventListener("scroll", handleHeaderScroll);

    return () => {
      window.removeEventListener("scroll", handleHeaderScroll);
    };
  });
  return (
    <header>
      <nav
        className="fixed top-0 z-20 w-full bg-transparent p-[10px_60px] transition-colors duration-500"
        id="Header"
      >
        <div className="flex items-center">
          <a href="/" className="logo mr-10 text-[1.5rem] text-white">
            Logo
          </a>

          <ul className="nav-list flex flex-1 items-center">
            <li className="nav-item ml-5 text-white">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item ml-5 text-white">
              <NavLink to="/movies">Movies</NavLink>
            </li>
            <li className="nav-item ml-5 text-white">
              <NavLink to="/tv">Tv</NavLink>
            </li>
            <li className="nav-item ml-5 text-white">
              <NavLink to="/people">People</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
