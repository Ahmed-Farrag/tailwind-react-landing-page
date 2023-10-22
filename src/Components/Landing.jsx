const Landing = () => {
  return (
    <section className="bg-[#1c2230]">
      <div className="container">
        <div className="element-center flex-col pt-[150px]">
          <div className="w-[750px] h-full max-w-full">
            <img
              className="w-full h-fit"
              src="/src/assets/images/landing.png"
              alt="landing-img"
            />
          </div>
          <div className="text-white text-center">
            <h1 className="text-[30px] md:text-[40px] font-semibold mb-[15px]">
              All your files in one secure location, <br /> accessible anywhere.
            </h1>
            <p className="font-normal text-lg px-[15px] md:w-[600px] max-w-full mb-[30px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis
              eaque rerum harum, error tempore sapiente commodi consequatur vero
              expedita repellat.
            </p>
          </div>
          <a
            href="/"
            className="btn element-center w-[280px] h-[60px] rounded-[30px] mx-auto text-white font-medium"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Landing;
