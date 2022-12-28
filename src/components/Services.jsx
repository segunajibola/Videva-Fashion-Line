import React from 'react'

const Services = () => {
  return (
    <section className="bg-[#947b4f] dark:bg-gray-100 text-gray-900 px-20 py-32 text-lg">
    <h3 className="text-center text-3xl mb-12">Services</h3>
    <div className="flex space-x-4 w-[90%] mx-auto flex-col md:flex-row">
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
  )
}

export default Services