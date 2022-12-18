import React from "react";

const Home = () => {
  return (
    <>
      <header className="pt-4 md:pt-0 px-2 z-10 md:flex min-h-full items-center justify-between w-full bg-gray-900 dark:bg-gray-100 text-white">
        <div className="w-[90vw] mx-auto">
          <div className="md:flex md:space-x-10 justify-between pt-4 px-1 md:px-2 md:pt-10 md:h-[80vh] mx-auto">
            <div className="flex flex-col pt-1 space-y-12 md:mt-15 my-auto">
              <h1 className="text-4xl font-bold mb-4">VIDEVA FASHION LINE</h1>
              <p className="text-2xl">
                Turning you into a fashionista! Let's bring your design to life
                with fabrics.
              </p>
              <p className="text-xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
                quidem nostrum laborum ex natus asperiores explicabo ipsam
                officiis? Molestias neque consequatur perferendis voluptates?
                Incidunt laboriosam labore suscipit accusamus. Laboriosam,
                explicabo.
              </p>
              <a
                href="#contact"
                className="py-3 px-2 w-32 font-medium text-black text-xl bg-gray-300 rounded-md transition duration-300"
              >
                Contact Us
              </a>
              <div className="flex space-x-6 text-xl divide-x">
                <div className="flex flex-col">
                  <p>100+</p>
                  <p>Happy Customers</p>
                </div>
                <div className="flex flex-col pl-5">
                  <p>15+</p>
                  <p>Shop Outlets</p>
                </div>
              </div>
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

      <section
        className="mt-10 pt-5 h-full"
        style={{ backgroundImage: `url(images/bgfashion.png)` }}
        id="about"
      >
        <div className="py-10 px-3 text-2xl">
          <h2 className="text-4xl text-center pb-3 border-b-4">About Us</h2>
          <div className="mt-10 -ml-1 space-y-6">
            <p className="">
              <span className="p-1 border border-black top-8 -mb -10 mr-2 inline rounded-full">
                1
              </span>
              DIY Sewing Community
            </p>
            <p className="">
              <span className="p-1 border border-black top-8 -mb-10 mr-2 inline rounded-full">
                2
              </span>
              Fashion Students
            </p>
            <p className="">
              <span className="p-1 border border-black top-8 -mb-10 mr-2 inline rounded-full">
                3
              </span>
              Clothing Boutiques
            </p>
            <p className="">
              <span className="p-1 border border-black top-8 -mb-10 mr-2 inline rounded-full">
                4
              </span>
              Tailors & Dressmakers
            </p>
            <p className="">
              <span className="p-1 border border-black top-8 -mb-10 mr-2 inline rounded-full">
                5
              </span>
              Training
            </p>
            <p className="">
              <span className="p-1 border border-black top-8 -mb-10 mr-2 inline rounded-full">
                6
              </span>
              Consulting
            </p>
          </div>
        </div>
      </section>

      <section className="m-2 md:flex" id="designs">
        <div className="flex mt-10 text-center space-x-2">
          <div className="flex md:w-80">
            <div>
              <img src="images/fashion2.jpg" alt="" srcset="" />
              <p>This is a text</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src="images/fashion3.jpg" alt="" srcset="" />
              <p>This is a text</p>
            </div>
          </div>
          <div className="flex">
            <div>
              <img src="images/fashion6.jpg" alt="" srcset="" />
              <p>This is a text</p>
            </div>
          </div>
        </div>
        <div className="ml-3">
          <h3 className="text-3xl mb-5 pt-10">
            Design a complete fashion collection in minutes 1
          </h3>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            alias nam quibusdam ut, dolorum veritatis est at cum, quod hic
            itaque adipisci laborum nemo vero deserunt rerum voluptate fugiat
            molestias?
          </p>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
            alias nam quibusdam ut, dolorum veritatis est at cum, quod hic
            itaque adipisci laborum nemo vero deserunt rerum voluptate fugiat
            molestias?
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
