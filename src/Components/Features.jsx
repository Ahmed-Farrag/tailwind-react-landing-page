import { useState } from "react";
import { data } from "../Data/data.js";
import FeatureBox from "./FeatureBox";

const Features = () => {
  const [items, setItems] = useState(data);
  return (
    <section className="pb-[150px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[856px] mx-auto max-w-full">
          {items.map((item) => (
            <FeatureBox
              key={item.title}
              title={item.title}
              icon={item.icon}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
