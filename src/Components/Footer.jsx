import footerLogo from "../assets/images/logo.svg";
import logIcon from "../assets/images/icon-location.svg";
import { useState } from "react";
import { contactData } from "../Data/data";

const Footer = () => {
  const [contact, setContact] = useState(contactData);

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
        <div className="mt-[30px]">
          <div className="flex items-center gap-[15px] w-[340px] max-w-full">
            <img
              src={logIcon}
              alt="location-img"
              className="w-[18px] h-[18px] object-contain"
            />
            <p className="font-normal text-sm tracking-[0.8px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              laudantium architecto ad molestias accusamus earum alias nemo
              necessitatibus eum porro explicabo facilis odit perspiciatis
              nesciunt sed obcaecati impedit dignissimos atque voluptatum amet,
              possimus ut fugiat. A iure aliquid nisi perferendis.
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
        </div>
      </div>
    </section>
  );
};

export default Footer;
