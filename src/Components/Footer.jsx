import footerLogo from "../assets/images/logo.svg";
import logIcon from "../assets/images/icon-location.svg";
import { useState } from "react";
import { contactData, linksData, socialIcons } from "../Data/data";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [contact, setContact] = useState(contactData);
  const [links, setLinsks] = useState(linksData);
  const [social, setSocial] = useState(socialIcons);

  return (
    <section className="bg-[#0c1524] pt-[320px] md:pt-[200px] pb-[100px] text-white">
      <div className="container">
        <a href="/">
          <img
            src={footerLogo}
            alt="logo-img"
            className="w-[175px] h-[66px] object-contain"
          />
        </a>
        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className="flex items-start gap-[15px] w-[340px] max-w-full">
            <img
              src={logIcon}
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              laudantium architecto ad molestias accusamus earum alias nemo
              necessitatibus eum porro explicabo facilis odit perspiciatis
            </p>
          </div>
          <div>
            {contact &&
              contact.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-0"
                >
                  <img
                    src={item.icon}
                    alt="icon"
                    className="w-[18px] h-[18px] object-contain"
                  />
                  <p>{item.text}</p>
                </div>
              ))}
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links &&
              links.map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="hover:text-mainColor transition-colors duration-200 text-base "
                  >
                    {link}
                  </a>
                </li>
              ))}
          </ul>
          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {social &&
              social.map((item) => (
                <li key={item}>
                  <a href="" className="group">
                    <div className="w-[40px] h-[40px] element-center border border-white rounded-full">
                      {item === "Facebook" ? (
                        <FaFacebookF className="group-hover:text-mainColor transition-all duration-200" />
                      ) : item === "twitter" ? (
                        <FaTwitter className="group-hover:text-mainColor transition-all duration-200" />
                      ) : (
                        <FaInstagram className="group-hover:text-mainColor transition-all duration-200" />
                      )}
                    </div>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
