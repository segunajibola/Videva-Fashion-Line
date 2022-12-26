const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 dark:bg-gray-100 text-gray-900 px-20 py-12 text-lg z-10 relative"
    >
      <h3 className="text-center text-3xl mb-12 text-gray-100">Contact</h3>
      <form
        method="POST"
        action="https://formsubmit.co/cfd3b6bc430690ebff065253cdfdb7b5"
        className="grid grid-cols-2 grid-rows-2 gap-4 max-w-[600px] w-full -mt-5 sm:mt-20 md:mt-16"
      >
        <div className="border-4 bg-red-200">
          <input
          className="bg-gray-400 dark:bg-gray-300 text-gray-900 rounded-lg p-2 outline-none placeholder:text-gray-200 m-2  border-4"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        </div>
        
        <div className="border-4 h-32">
          <input
          className="bg-gray-400 dark:bg-gray-300 p-2 text-gray-800 rounded-lg outline-none placeholder:text-gray-200 m-2 h-8"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        </div>
        <div className="row-start-2  border-4">
          <textarea
          className="bg-gray-400 dark:bg-gray-300 text-gray-800 rounded-lg p-2 outline-none placeholder:text-gray-200 row-start-2  border-4"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        </div>
        
        <input
          type="hidden"
          name="_next"
          value="https://www.segunajibola.com/thankyou"
        />
        <input type="hidden" name="_captcha" value="false" />
        <button className="bg-gray-400 dark:bg-gray-300 text-gray-100 border-2 hover:text-gray-800 hover:bg-gray-100 hover:border-gray-200 px-4 py-3 my-8 mx-auto flex items-center dark:text-gray-900 dark:border-gray-500 dark:hover:bg-gray-300 dark:hover:border-gray-800">
          Send mail
        </button>
      </form>
    </section>
  );
};

export default Contact;
