import React from "react";

const Home = () => {
  return (
    <>
    <header className="pt-4 md:pt-0 px-2 z-10 md:flex min-h-full items-center justify-between w-full bg-gray-100">
      <div className="w-[98vw] mx-auto">
        <div className="md:flex md:space-x-10 justify-between pt-4 px-1 md:px-2 md:pt-10 md:h-[80vh] mx-auto">
          <div className="flex flex-col pt-1 space-y-12 md:mt-5 my-auto">
            <h1 className="text-4xl font-bold mb-4">VIDEVA FASHION LINE</h1>
            <p className="text-2xl">
              Turning you into a fashionista! Let's bring your design to life
              with fabrics.
            </p>
            <p className="text-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quidem nostrum laborum ex natus asperiores explicabo ipsam officiis? Molestias neque consequatur perferendis voluptates? Incidunt laboriosam labore suscipit accusamus. Laboriosam, explicabo.</p>
            <a
              href="#contact"
              className="py-3 px-2 w-36 font-medium text-white text-xl bg-black rounded-md transition duration-300"
            >
              Get In Touch
            </a>
          </div>
          <div className="flex flex-shrink-0 justify-center mt-5 items-center w-full md:w-96">
            <img
              src="images/fashionplain.jpg"
              alt="Responsive components"
              className="w-[800px] h-[500px]"
            />
          </div>
        </div>
      </div>
    </header>

    <section className="mt-10 pt-5 h-full" style={{backgroundImage: `url(images/bgfashion.png)`}} id="about">
        <div className="py-10 px-3 text-xl">
            <h2 className="text-4xl text-center pb-3 border-b-4">About Us</h2>
            <div className="mt-10 -ml-1 space-y-6">
              <p className=""><span className="p-1 border top-8 -mb -10 mr-2 inline rounded-full">1</span>DIY Sewing Community</p>
              <p className=""><span className="p-1 border top-8 -mb-10 mr-2 inline rounded-full">2</span>Fashion Students</p>
              <p className=""><span className="p-1 border top-8 -mb-10 mr-2 inline rounded-full">3</span>Clothing Boutiques</p>
              <p className=""><span className="p-1 border top-8 -mb-10 mr-2 inline rounded-full">4</span>Tailors & Dressmakers</p>
              <p className=""><span className="p-1 border top-8 -mb-10 mr-2 inline rounded-full">5</span>Training</p>
              <p className=""><span className="p-1 border top-8 -mb-10 mr-2 inline rounded-full">6</span>Consulting</p>
            </div>
        </div>
    </section>
    </>
  );
};

export default Home;
