const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gray-900 dark:bg-gray-100 text-gray-900 px-20 py-12 text-lg z-10 relative"
    >
      <h3 className="text-center text-3xl mb-12 text-gray-100">Contact</h3>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <form
            method="POST"
            action="https://formsubmit.co/cfd3b6bc430690ebff065253cdfdb7b5"
            className="relative flex flex-col max-w-[600px] w-full -mt-5 sm:mt-20 md:mt-16"
          >
            <input
              className="bg-gray-400 dark:bg-gray-300 text-gray-900 rounded-lg p-2 outline-none placeholder:text-gray-200"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="bg-gray-400 dark:bg-gray-300 my-4 p-2 text-gray-800 rounded-lg outline-none placeholder:text-gray-200"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <textarea
              className="bg-gray-400 dark:bg-gray-300 text-gray-800 rounded-lg p-2 outline-none placeholder:text-gray-200"
              name="message"
              rows="10"
              placeholder="Message"
              required
            ></textarea>
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
        </div>
    </section>
  );
};

export default Contact;
