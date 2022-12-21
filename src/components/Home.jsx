import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import { GiClothes } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";

const Home = () => {
  return (
    <>
      <header className="fixed pt-4 md:pt-0 px-2 md:flex min-h-full items-center justify-between w-full bg-gray-900 bg-center dark:bg-gray-100 text-white">
        <div className="w-[90vw] mx-auto">
          <div className="md:grid grid-cols-5 md:space-x-10 justify-between pt-4 px-1 md:px-2 md:pt-16 md:h-[95vh] mx-auto borde r-4">
            <div className="animate-fade-in-right grid col-span-2">
              <div className="flex flex-col pt-1 space-y-12 md:mt-15 my-auto">
                <h1 className="text-4xl font-bold mb-2">MODA</h1>
                <p className="text-3xl">
                  Moda in Spanish - Fashion in English.
                </p>
                <p className="text-2xl">
                  Fashion, trend, style, vogue - everything here. Look, we know
                  it's hard to find the perfect pair of pants that fits
                  your body. You're not alone—we've all been there! But we want
                  to make sure you get the right fit, so we created Moda for people like you.
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
                    <p>Boutique</p>
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

      <section className="mt-[45rem] bg-gray-900 dark:bg-gray-100 text-white p-8 text-2xl z-10 relative">
        <div className="w-[70vw] mx-auto z-10">
          <h3 className="text-center text-3xl tracking-widest my-2">
            Love matching colours?
          </h3>
          <div className="grid grid-cols-2 gap-2 z-10 w-[85%] mx-auto border-4 h-[80vh] py-8">
            <div className="mx-auto">
              <img
                src="images/img5.jpg"
                alt=""
                className="w-[90%] h-[100%] mx-auto"
              />
            </div>
            <div className="mx-auto">
              <img
                src="images/img6.jpg"
                alt=""
                className="w-[90%] mx-auto h-[100%]"
              />
            </div>
          </div>
          <button className="flex rounded-md bg-[pink] p-2 w-[9rem] mx-auto my-3 text-gray-900 hover:scale-110 ease-in-out delay-100 duration-300">
            Order Now
          </button>
        </div>
      </section>

      <section className="bg-gray-800 dark:bg-gray-100 text-white p-10 text-2xl z-10 relative">
        <div className="w-[70vw] mx-auto">
          <div className="grid grid-cols-4 grid-rows-2 gap-y-8 gap-x-4">
            <p className="col-start-1 col-span-3 text-demo1">
              Moda provides comfortable, durable clothes that will last a
              lifetime. Our products are made by artisans in the region of
              Spain, a region that has long been known for its tradition of
              quality clothing. Our garments are crafted using sustainable
              materials and traditional techniques, making them an excellent
              choice for people who want to support local economies while
              looking good on the streets.
            </p>
            <div className="col-end-5 col-span-2 row-start-2">
              <h3 className="text-2xl mb-2">
                Bringing innovation to the style
              </h3>
              <p className="text-xl">
                We believe that our clothing should be a reflection of your
                unique self, so we've partnered with influencers, who use our
                clothing in their daily lives and have shared their stories of
                how wearing our product has helped them feel more confident and
                empowered. We also work with designers to create new designs
                that reflect our values and reflect the needs of our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-gray-900 dark:bg-gray-100 relative h-[120vh] w-[90vw] z-10 mx-auto">
        <img
          src="/images/corey.jpg"
          alt=""
          className="w-auto left-10 ml-auto absolute top-10 h-[100%] inline"
        />
        <div className="text-white w-[30rem] absolute top-[10rem] right-[10rem]">
          <h3 className="text-2xl mb-2">Picks of the day - Jeans</h3>
          <p className="text-xl">
            Moda's jeans are as comfortable as they are stylish. They're made
            with a selection of materials that provide both comfort and style,
            including soft cotton and linen blend fabrics, durable denim, and
            stretchy spandex. These jeans are handmade by artisans in the region
            of Moda's headquarters, so you can be sure that each pair is made
            with the same care as the last. The company also uses sustainable
            materials whenever possible, including organic vegetable dyes and
            recycled polyester fabrics. Moda has built its brand around quality
            and value—it wants to make sure that every customer feels
            comfortable and satisfied with their purchase from Moda.
          </p>
        </div>
      </div>

      <section className="bg-gray-900 dark:bg-gray-100 text-white px-10 py-12 text-xl z-10 relative">
        <div className="flex space-x-[8rem] md:mt-[10rem]">
          <h3>Who We Are?</h3>
          <p className="text-lg">
            Our mission is simple: to create products that make you feel
            comfortable, fulfilled, and confident about your appearance. If
            you're interested in learning more about us or buying some of our
            great products, please visit us at any of our boutiques.
          </p>
        </div>
      </section>

      <section className="bg-gray-200 dark:bg-gray-100 text-gray-900 px-20 py-32 text-lg z-10 relative">
        <h3 className="text-center text-3xl mb-12">Services</h3>
        <div className="flex space-x-4 w-[90%] mx-auto">
          <div className="text-center px-4 hover:scale-110 duration-100 delay-100 ease-in-out">
            <AiOutlineComment
              size={145}
              className="mx-auto hover:animate-bounce duration-100 delay-100 ease-in-out"
            />
            <h2 className="text-2xl my-4">Fashion Community</h2>
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

          <section>
            
          </section>

          <div className="w-[50%] space-y-8 bg-black py-16 px-12">
            <h3 className="text-xl font-bold">This is an heading</h3>
            <p>
            In addition to helping you look good while reading or playing games on your phone, Moda is also there when you need advice on what to wear in the morning—or any other time of day! Our stylists spend hours working on each garment, ensuring they'll fit perfectly no matter what size or shape you are. And since we know how hard it can be finding things that fit well (even if they cost less), we also offer FREE alterations on all orders over $50!
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
