import { useState } from "react";
import { tesData } from "../Data/data";
import quoteImg from "../assets/images/bg-quotes.png";
import TestimonialBox from "./TestimonialBox";

const Testimonials = () => {
  const [testData, setTestData] = useState(tesData);

  return (
    <section className="pb-[350px]">
      <div className="container relative">
        <div className="absolute left-[20px] top-[-35px]">
          <img src={quoteImg} alt="quote" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] relative z-10">
          {testData &&
            testData.map((item) => (
              <TestimonialBox
                key={item.id}
                desc={item.desc}
                image={item.image}
                position={item.position}
                name={item.name}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
