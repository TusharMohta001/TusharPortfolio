import React from "react";

const Contact = () => {
  return (
    <section className="  py-16 px-4 md:px-10">
      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>
        <p className="max-w-2xl mx-auto dark:text-gray-300">
          Interested in hiring me for your project or just want to say hi? Fill in the form below or send me an email at
          <a
            href="mailto:evans@yourwebsite.com"
            className="text-blue-500 hover:underline mx-1"
          >
            tusharmohta001@gmail.com
          </a>
          . Want to connect? Follow me on social media.
        </p>
        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
  {[
    { platform: "twitter", url: "https://x.com/home" },
    { platform: "instagram", url: "https://www.instagram.com/tusharmohtaa/" },
    { platform: "linkedin", url: "https://www.linkedin.com/in/tushar-mohta-b5409733a/" },
    { platform: "github", url: " https://github.com/TusharMohta001" },
  ].map(({ platform, url }, index) => (
    <a
      key={index}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 text-blue-400 rounded-full border flex items-center justify-center dark:hover:bg-white hover:bg-[#acacac] hover:text-black transition-all"
    >
      <i className={`fab fa-${platform}`}></i>
    </a>
  ))}
</div>

      </div>

      {/* Contact Details */}
      <div className="mb-16">
        <h3 className="text-3xl font-bold border-l-4 border-blue-500 pl-3 mb-6">
          Contact Details
        </h3>
        <div className="grid md:grid-cols-3 gap-6 dark:text-gray-300">
          <div>
            <h4 className="text-lg font-semibold ">Phone</h4>
            <p>+91 8290942305</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold ">Location</h4>
            <p>Bikaner, Rajasthan, India </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold ">Email</h4>
            <p> tusharmohta001@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="mb-16 w-full h-72 md:h-96">
        <iframe
          title="map"
          className="w-full h-full border-none rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019157787224!2d-122.42177888468136!3d37.7749297797596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c11d83c81%3A0x7485db57ec7cf382!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1615146537527!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Form */}
      <div>
        <h3 className="text-3xl font-bold border-l-4 border-blue-500 pl-3 mb-6">
          Get In Touch
        </h3>
        <form className="grid md:grid-cols-2 gap-4" action="https://formsubmit.co/tusharmohta001@gmail.com" method="POST">
          <input
            type="text"
            placeholder="Your Name*"
            className="p-3 rounded dark:bg-[#3f3f3f] bg-[#dcdcdc]  w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email address*"
            className="p-3 rounded dark:bg-[#3f3f3f] bg-[#dcdcdc]  w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Phone*"
            className="p-3 rounded dark:bg-[#3f3f3f] bg-[#dcdcdc]  w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Location*"
            className="p-3 rounded dark:bg-[#3f3f3f] bg-[#dcdcdc]  w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message*"
            rows="5"
            className="p-3 rounded dark:bg-[#3f3f3f] bg-[#dcdcdc]  md:col-span-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>

          <div className="flex items-center gap-2 md:col-span-2">
            <input type="checkbox" id="save-info" />
            <label htmlFor="save-info" className="text-sm dark:text-gray-300">
              Save my name, email, and website in this browser for the next time.
            </label>
          </div>

          <button
            type="submit"
            className="md:col-span-2 px-6 py-3 mt-2 rounded-full bg-blue-500 hover:bg-blue-600  font-semibold w-fit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
