import { useEffect } from "react";
import logo from "/assets/images/logo.png";
import { useRef } from "react";

const Header = () => {
  const links = ["Features", "Team", "Signin"];
  const linksList = links.map((el, idx) => (
    <li
      className="h-fit opacity-90 hover:opacity-100 hover:underline  transition-all duration-500"
      key={idx}
    >
      <a className="block p-1" href={"/"}>
        {el}
      </a>
    </li>
  ));
  const head = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 50) {
        head.current.style.background = "#0c1524";
        head.current.style.padding = "16px 0";
      } else {
        head.current.style.background = "#1c2433";
        head.current.style.padding = "28px 0";
      }
    });
  });
  return (
    <header
      ref={head}
      className="py-7 sticky top-0 transition-all duration-100 bg-[#1c2433] z-50"
    >
      <div className="container text-white flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <a href="/">
          <img className="w-40" src={logo} alt="Logo Image" />
        </a>
        <nav className="flex align-items-center">
          <ul className="flex justify-between gap-5 lg:gap-10 xl:gap-16 items-center">
            {linksList}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
