import React from "react";
import { AiOutlineComment } from "react-icons/ai";
import { GiClothes } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "/images/img5-placeholder.jpg";

const Home = () => {
  return (
    <>
      <header className="pt-4 md:pt-0 px-2 md:flex min-h-full items-center justify-between w-full bg-gray-900 bg-center dark:bg-gray-100 text-white">
        <div className="w-[90vw] mx-auto">
          <div className="md:grid grid-cols-5 md:space-x-10 justify-between pt-4 px-1 md:px-2 md:pt-16 md:h-[100vh] mx-auto">
            <div className="animate-fade-in-right grid col-span-2">
              <div className="flex flex-col pt-1 space-y-6 md:mt-15 my-auto">
                <h1 className="text-4xl font-bold mb-2">MODA</h1>
                <p className="text-3xl">
                  Moda in Spanish - Fashion in English.
                </p>
                <p className="text-2xl">
                  Fashion, trend, style, vogue - everything here. Look, we know
                  it's hard to find the perfect pair of pants that fits your
                  body. You're not alone—we've all been there! But we want to
                  make sure you get the right fit, so we created Moda for people
                  like you.
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
                className="w-full md:w-[40rem] h-[45rem] -mt-64 borde r-4"
              />
              <img
                src="images/homeFashion.png"
                alt="Responsive components"
                className="absolute w-full md:w-[40rem] h-[52.4rem] -mt-64"
              />
            </div>
          </div>
        </div>
      </header>

      <section className="bg-[#947b4f] dark:bg-gray-100 text-white p-8 text-2xl">
        <div className="w-[70vw] mx-auto z-10">
          <h3 className="text-center text-3xl tracking-widest my-2">
            Love matching colours?
          </h3>
          <div className="grid grid-cols-2 w-[90%] mx-auto border-4 py-4">
            <div className="mx-auto">
              <LazyLoadImage
                src={`images/img5.jpg`}
                width={400}
                height={450}
                PlaceholderSrc={PlaceholderImage}
                effect="blur"
                className={`w-[100%] h-[100%] mx-auto object-cover object-top`}
                alt="Image Alt"
              />
            </div>
            <div className="mx-auto">
            <LazyLoadImage
                src={`images/img6.jpg`}
                width={400}
                height={450}
                effect="blur"
                className={`w-[100%] h-[100%] mx-auto object-cover object-top`}
                alt="Image Alt"
              />
            </div>
          </div>
          <button className="flex rounded-md bg-[pink] p-2 w-[9rem] mx-auto my-3 text-gray-900 hover:scale-110 ease-in-out delay-100 duration-300">
            Order Now
          </button>
        </div>
      </section>

      <section className="bg-gray-800 dark:bg-gray-100 text-white p-10 text-2xl">
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

      <section className="py-16 bg-gray-100">
        <div className="grid grid-cols-2 bg-gray-100 dark:bg-gray-100 w-[80vw] mx-auto h-[70vh]">
          <div className="">
            <img
              src="/images/corey.jfpg"
              alt=""
              className="w-full object-cover object-bottom h-[50%]"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl mb-4">Picks of the day - Jeans</h3>
            <p className="text-xl">
              Moda's jeans are as comfortable as they are stylish. They're made
              with a selection of materials that provide both comfort and style,
              including soft cotton and linen blend fabrics, durable denim, and
              stretchy spandex. These jeans are handmade by artisans in the
              region of Moda's headquarters, so you can be sure that each pair
              is made with the same care as the last. The company also uses
              sustainable materials whenever possible, including organic
              vegetable dyes and recycled polyester fabrics. Moda has built its
              brand around quality and value—it wants to make sure that every
              customer feels comfortable and satisfied with their purchase from
              Moda.
            </p>
          </div>
        </div>
        <div className="flex space-x-[1rem] w-[80vw] mx-auto">
          <h3 className="w-64 text-lg">Who We Are?</h3>
          <p className="text-lg">
            Our mission is simple: to create products that make you feel
            comfortable, fulfilled, and confident about your appearance. If
            you're interested in learning more about us or buying some of our
            great products, please visit us at any of our boutiques.
          </p>
        </div>
      </section>

      {/* <section className="bg-gray-100 dark:bg-gray-100 px-10 py-12 text-xl">
        <div className="flex space-x-[8rem] md:mt-[10rem]">
          <h3>Who We Are?</h3>
          <p className="text-lg">
            Our mission is simple: to create products that make you feel
            comfortable, fulfilled, and confident about your appearance. If
            you're interested in learning more about us or buying some of our
            great products, please visit us at any of our boutiques.
          </p>
        </div>
      </section> */}

      <section className="bg-[#947b4f] dark:bg-gray-100 text-gray-900 px-20 py-32 text-lg">
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

      <section className="bg-gray-900 dark:bg-gray-100 relative h-[120nvh] w-[90vw] z-10 mx-auto p-24">
        <div className="grid grid-cols-6 grid-rows-3 grid-flow-col gap-3 w-[90%] mx-auto h-[100vh] border-4 p-2">
          <p className="text-xl col-span-1 text-white">
            We create amazing custom wears in different varieties. Look through
            our gallery and upgrade your wardrope today!
          </p>

          <div className="col-start-2 col-span-2">
            <img src="/images/col2.jpg" alt="" className="fh-[100%] w-max" />
          </div>

          <div className="col-start-4 col-span-3 row-span-2">
            <img src="/images/col5.jpg" alt="" className="fh-[75%] w-max" />
          </div>

          <div className="row-start-2 col-start-1 col-span-2 h-[9 0%] ">
            <img src="/images/col1.jpg" alt="" className="h-[208%] w-max" />
          </div>

          <div className="row-start-2 col-start-3 col-span-1">
            <img src="/images/col3.jpg" alt="" className="gh-[50%] w-max" />
          </div>

          <div className="row-start-3 col-start-3 col-span-1">
            <img
              src="/images/col4.jpg"
              alt=""
              className="fh-[50%] my-[0.5px] w-max"
            />
          </div>

          <div className="row-start-3 col-end-7 col-span-3 justify-self-end place-self-end">
            {/* <img
            src="/images/col6h.jpg"
            alt=""
            className="fh-[50%] w-max"
          /> */}
            <p className="text-white text-lg">
              We believe in making products with love and care—that's why we
              donate 10% of our profits to environmental causes (like protecting
              our oceans through plastic pollution).
            </p>
          </div>
        </div>
      </section>

      <Testimonials />
      <Contact />

      <section className="bg-gray-900 dark:bg-gray-100 text-white pt-16 text-lg h-[90vh]">
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
              In addition to helping you look good while reading or playing
              games on your phone, Moda is also there when you need advice on
              what to wear in the morning—or any other time of day! Our stylists
              spend hours working on each garment, ensuring they'll fit
              perfectly no matter what size or shape you are. And since we know
              how hard it can be finding things that fit well (even if they cost
              less), we also offer FREE alterations on all orders over $50!
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
