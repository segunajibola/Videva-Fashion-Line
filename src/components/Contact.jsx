const Contact = () => {
  return (
    <section
      id="contact"
      className="dark:bg-gray-100 text-gray-900 px-20 py-12 text-lg"
      style={{ 
        backgroundImage: `url(/img/img3.jpg)`,
        backgroundSize: "cover",
        // backgroundWidth: "90vw",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        backgroundPosition: "center",
        // backgroundAttachment: "fixed"
    }}
    >
      <h3 className="text-center text-3xl mb-12 text-gray-100">Contact</h3>
      <form
        method="POST"
        action="https://formsubmit.co/cfd3b6bc430690ebff065253cdfdb7b5"
        className="grid grid-cols-2 grid-rows-3 gap-2 max-w-[400px] mx-auto w-full -mt-5 sm:mt-20 md:mt-16"
      >
        {/* <div className=""> */}
          <input
            className="bg-gray-400 dark:bg-gray-300 text-gray-900 rounded-lg p-2 outline-none placeholder:text-gray-200"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
        {/* </div> */}

        {/* <div className="border-4 border-blue-200 bg-green-50 h-16"> */}
          <input
            className="bg-gray-400 dark:bg-gray-300 p-2 text-gray-800 rounded-lg outline-none placeholder:text-gray-200"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        {/* </div> */}
        <div className="row-start-2 col-span-2">
          <textarea
            className="bg-gray-400 dark:bg-gray-300 text-gray-800 rounded-lg p-2 outline-none placeholder:text-gray-200 w-full h-full"
            name="message"
            // rows="3"
            placeholder="Message"
            required
          ></textarea>
        </div>

        {/* <input
          type="hidden"
          name="_next"
          value="https://www.segunajibola.com/thankyou"
        />
        <input type="hidden" name="_captcha" value="false" /> */}
        <button className="bg-gray-400 dark:bg-gray-300 text-gray-100 border- hover:text-gray-800 hover:bg-gray-100 hover:border-gray-200 px-4 py-3 my-2 mx-auto flex items-center dark:text-gray-900 dark:border-gray-500 dark:hover:bg-gray-300 dark:hover:border-gray-800 row-start-3 col-span-2">
          Send mail
        </button>
      </form>
    </section>
  );
};

export default Contact;
