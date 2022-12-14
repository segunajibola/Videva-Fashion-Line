import React from "react";

const Home = () => {
  return (
    <header className="relative mt-10 pt-4 px-2 z-10 md:flex md:m min-h-full items-center justify-between w-full mx-1 max-w-7xl">
      <div className="relative max-w-full">
        <div className="relative md:flex justify-between pt-4 px-1 md:px-2 md:pt-12 md:mt-20">
          <div className="flex flex-col pt-1 md:mt-5">
            <h1 className="text-4xl font-bold mb-4">VIDEVA FASHION LINE</h1>
            <p className="mb-4 text-xl">
              Turning you into a fashionista! Let's bring your design to life
              with fabrics.
            </p>
            <a
              href="#contact"
              className="py-3 px-2 w-36 font-medium text-white text-xl bg-black rounded-md transition duration-300"
            >
              Get In Touch
            </a>
          </div>
          <div className="flex flex-shrink-0 justify-center mt-5 md:ml-52 items-center w-full md:w-96">
            <img
              src="images/fashionplain.jpg"
              alt="Responsive components"
              className="w-64"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
