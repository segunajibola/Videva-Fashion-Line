import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import { GiClothes } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";

const Home = () => {
  return (
    <>
      <header className="fixed pt-4 md:pt-0 px-2 md:flex min-h-full items-center justify-between w-full bg-gray-900 bg-fixed bg-center bg-cover dark:bg-gray-100 text-white">
        <div className="w-[90vw] mx-auto">
          <div className="md:grid grid-cols-5 md:space-x-10 justify-between pt-4 px-1 md:px-2 md:pt-16 md:h-[95vh] mx-auto borde r-4">
            <div className="animate-fade-in-right grid col-span-2">
              <div className="flex flex-col pt-1 space-y-12 md:mt-15 my-auto">
                <h1 className="text-4xl font-bold mb-2">MODA</h1>
                <p className="text-3xl">
                  Moda in Spanish - Fashion in English.
                </p>
                <p className="text-2xl">
                Fashion, trend, style, vogue - everything here.
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
            </div>
            <div className="animate-fade-in-left grid col-span-3 justify-center mt-5 items-center w-full">
              <img
                src="images/vector.png"
                alt="Responsive components"
                className="w-full md:w-[40rem] h-[50rem] -mt-64 borde r-4"
              />
              <img
                src="images/homeFashion.png"
                alt="Responsive components"
                className="absolute w-full md:w-[40rem] h-[55rem] -mt-64 borde r-4"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="mt-[10rem] bg-gray-800 dark:bg-gray-100 text-white p-10 text-2xl z-10">
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

      <div className="bg-gray-900 dark:bg-gray-100 relative h-[70vh] w-[92vw] z-10">
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

      <section className="bg-gray-900 dark:bg-gray-100 text-white px-10 py-12 text-xl z-10 relative">
        <div className="flex space-x-[12rem] md:mt-[20rem]">
          <h3>Who We Are</h3>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint est
            nam totam ullam fugiat, iusto quidem repudiandae suscipit odit
            accusantium dolore, beatae cumque, maxime tempore autem corrupti
            expedita tempora quisquam.
          </p>
        </div>
      </section>

      <section className="bg-gray-200 dark:bg-gray-100 text-gray-900 px-20 py-24 text-lg z-10 relative">
        <h3 className="text-center text-3xl mb-12">Services</h3>
        <div className="flex space-x-4 w-[90%] mx-auto">
          <div className="text-center px-4 hover:scale-110 duration-100 delay-100 ease-in-out">
            <AiOutlineComment
              size={145}
              className="mx-auto hover:animate-bounce duration-100 delay-100 ease-in-out"
            />
            <h2 className="text-2xl my-4">Sewing Community</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque magnam reiciendis.
            </p>
          </div>
          <div className="text-center px-4 hover:scale-110 duration-100 delay-100 ease-in-out">
            <GiClothes
              size={145}
              className="mx-auto hover:animate-bounce duration-100 delay-100 ease-in-out"
            />
            <h2 className="text-2xl my-4">Clothing Boutiques</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloremque magnam reiciendis.
            </p>
          </div>
          <div className="text-center px-4 hover:scale-110 duration-100 delay-100 ease-in-out">
            <GiTeacher
              size={145}
              className="mx-auto hover:animate-bounce duration-100 delay-100 ease-in-out"
            />
            <h2 className="text-2xl my-4">Training & Consulting</h2>
            <p>
              Lorem ipsuím, dolor sit amet consectetur adipisicing elit.
              Doloremque magnam reiciendis.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 dark:bg-gray-100 text-white pt-16 text-lg h-[90vh] z-10 relative">
        <div className="flex w-[70%] h-[40l] m-auto">
          <div className="w-[50%] h-[20%] my-auto z-10">
            <img
              src="/images/suit.png"
              alt=""
              className="ml-[210px] h-[450px] w-[80%] z-10"
            />
          </div>

          <div className="w-[50%] space-y-8 bg-black py-16 px-12">
            <h3 className="text-xl font-bold">This is an heading</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
              illum laboriosam nesciunt odio esse veritatis sit quod nostrum nam
              quae amet atque architecto illo eum ullam alias eos rem earum.
            </p>
            <p className="pb-16">$1000</p>
            <div className="flex space-x-6">
              <button className="p-4 bg-gray-700">Customize your dress</button>
              <button>Make an appointment</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
