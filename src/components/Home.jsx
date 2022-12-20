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

      <section className="bg-gray-900 dark:bg-gray-100 text-white p-10 text-2xl">
        <div className="w-[70vw] mx-auto">
          <div className="grid grid-cols-4 grid-rows-2 gap-y-8 gap-x-4">
            <p className="col-start-1 col-span-3 text-demo1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              sequi minima neque pariatur cupiditate facere maiores nobis velum
              dolor sit amet consectetur adipisicing elit. Quas eaque inventore
              tempore reprehenderit corporis exercitationem, ut excepturi
              eligendi porro? Sit quas labore hic illum corporis enim aliquid
              excepturi Deleniti, dolore.
            </p>
            <div className="col-end-5 col-span-2 row-start-2">
              <h3 className="text-2xl mb-2">
                Bringing innovation to the style
              </h3>
              <p className="text-xl">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam
                tenetur, at earum impedit odit repellat accusamus non debitis
                aliquid vel recusandae excepturi reiciendis quia quam! In
                veritatis corrupti et nam?
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-900 dark:bg-gray-100 relative h-[70vh] w-[92vw]">
        <img
          src="/images/fashion4.jpg"
          alt=""
          className="w-[80%] left-10 ml-auto absolute top-10 h-[150%] inline"
        />
        <div className="inline absolute text-gray-500 right-4 w-[15%]">
          <h3 className="text-xl mb-2">Sattica Manasa</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quod
            saepe repellat facere laborum voluptate debitis quia quidem omnis
            minima sint aliquid, id magni qui repellendus autem fuga fugit
            placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, ut molestias repellendus, cupiditate quaerat laudantium
            architecto eum natus libero facere consequuntur? Facilis fuga illum
            fugit unde culpa esse fugiat nulla!
          </p>
        </div>
      </div>

      <section className="bg-gray-900 dark:bg-gray-100 text-white px-10 py-40 text-xl">
        <div className="flex space-x-[10rem] md:mt-[20rem]">
          <h3>About</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint est
            nam totam ullam fugiat, iusto quidem repudiandae suscipit odit
            accusantium dolore, beatae cumque, maxime tempore autem corrupti
            expedita tempora quisquam.
          </p>
        </div>
      </section>

      <section className="bg-gray-200 dark:bg-gray-100 text-white py-40 text-md h-[112vh]">
        <div className="flex w-[80%] mx-auto">
          <div className="w-[50%] h-[20%] my-auto z-10">
            <img
              src="/images/suit.png"
              alt=""
              className="ml-[300px] h-[450px] w-[80%] z-10"
            />
          </div>

          <div className="w-[50%] space-y-8 bg-black py-16 px-24">
            <h3 className="text-xl font-bold">This is an heading</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              illum laboriosam nesciunt odio esse veritatis sit quod nostrum nam
              quae amet atque architecto illo eum ullam alias eos rem earum.
            </p>
            <p className="pb-16">$1000</p>
            <div className="flex space-x-6">
              <button className="p-4 bg-gray-900">Customize your dress</button>
              <button>Make an appointment</button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="pt-5 h-full bg-gray-900"
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
