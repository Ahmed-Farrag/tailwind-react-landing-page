import stay from "../assets/images/illustration-stay-productive.png";
import arrow from "../assets/images/icon-arrow.svg";
const StayProductive = () => {
  return (
    <section className="pb-[150px]">
      <div className="container grid grid-col-1 md:grid-cols-2 gap-[]30px place-items-center">
        <div>
          <img src={stay} alt="stay img" />
        </div>
        <div className="text-white">
          <h3 className="font-mediam text-[35px] leading-[50px]">
            Saty Productive, <br />
            wherever you are
          </h3>
          <div className="my-[15px] font-normal text-sm traking-[0.8px]">
            <p className="mb-[15px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              eaque rerum harum, error tempore sapiente commodi consequatur vero
              expedita repellat.Quis eaque rerum harum,
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              eaque rerum harum, error tempore sapiente commodi consequatur vero
              expedita repellat.Quis eaque rerum harum,
            </p>
          </div>
          <a
            href="/"
            className="text-mainColor  hover:text-[#42b0d1] border-b-2 border-mainColor border-solid pb-[5px] flex items-center gap-[15px] w-fit transition-colors duration-200"
          >
            See how Floy work!
            <img
              src={arrow}
              alt="arrow img"
              className="w-[20px] h-[20px] abject-contain animate-[moveRight_1s_ease-in-out_infinite]"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default StayProductive;
