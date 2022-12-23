import React from "react";
import testimonials from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Testimonials = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-100 text-gray-900 px-20 py-12 text-lg z-10 relative">
      <div>
        <h3 className="text-center text-3xl mb-12">Testimonials</h3>
        <div className="grid grid-cols-3 w-[80vw] h-[27rem] mx-auto border-4 border-red-500">
          <div className="col-span-1 border-4 border-red-500">
            <img src="/images/corey.jpg" alt="" className="h-[26rem] ml-auto" />
          </div>
          <div className="relative col-span-2 border-4 border-red-500">
            <div className="absolute top-24 -left-2">
              <div className="bg-gray-900 rounded-lg w-7d2 hd-32 left-0">
              <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              // pagination={{
              //   clickable: true,
              // }}
              navigation={false}
              modules={[Autoplay, Navigation]}
              className="mx-auto w-[20rem]"
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide className="md:my-2">
                    <figure className="p-2 text-center">
                      <figcaption className="font-medium text-gray-100 dark:text-gray-800">
                          <div>{testimonial.name}</div>
                          <div className="mb-2">{testimonial.position}</div>
                        </figcaption>
                        <blockquote className="mx-auto">
                          <p className="text-lg font-semibold text-gray-100">
                            {testimonial.text}
                          </p>
                        </blockquote>
                    </figure>
                  </SwiperSlide>
                  ))}
                  </Swiper>
                {/* //   <div key={testimonial.id} className="text-white">{testimonial.name}</div> */}
                
                {/* <h3 className="text-white">Jake Smith</h3> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
