import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-gray-200 dark:bg-gray-100 text-gray-900 px-20 py-32 text-lg z-10 relative">
      <div>
        <h3 className="text-center text-3xl mb-12">Testimonials</h3>
        <div className="grid grid-cols-2 w-[80vw]">
            <div>
                <img src="/images/corey.jpg" alt="" />
            </div>
            <div className="relative">
                <div className="absolute top-40">
                   <div className="bg-gray-900 rounded-md w-32 h-32 right-0">
                    <h3 className="text-white">Jake Smith</h3>
                </div> 
                </div>
                
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
