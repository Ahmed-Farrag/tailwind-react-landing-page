import { useEffect, useRef } from "react";
import { useState } from "react";
import logoImg from "../assets/images/logo.svg";

const Header = () => {
  const headerRef = useRef();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        headerRef.current.style.background = "#0c1524";
        headerRef.current.style.padding = "20px 0";
      } else {
        headerRef.current.style.background = "";
        headerRef.current.style.background = "";
      }
    });
  }, []);

  const [links, setsLink] = useState(["features", "Team", "Signin"]);
  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed top-0 left-0 w-full z-50"
    >
      <div className="container flex justify-between items-center gap-[30px] ms:gap-0 flex-col sm:flex-row">
        <a href="/">
          <img src={logoImg} alt="logo-img" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px]">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
