const FeatureBox = ({ title, desc, icon }) => {
  return (
    <div className="text-white element-center flex-col text-center">
      <img
        src={icon}
        alt="icon-img"
        className="w-[80px] h-[80px] object-contain"
      />
      <h4 className="text-x1 font-semibold my-[15px]">{title}</h4>
      <p className="font-normal text-sm">{desc}</p>
    </div>
  );
};

export default FeatureBox;
