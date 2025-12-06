import React, { useState } from "react";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

 const sendEmail = (e) => {
  e.preventDefault();
  if (!isChecked) return;

  setLoading(true);

  emailjs
    .sendForm(
      "service_8fas3zn",
      "template_1jea5hf",
      e.target,
      "KpV9rObnc2VEB5uS0"
    )
    .then(
      () => {
        setLoading(false);
        setIsSubmitted(true);
        e.target.reset();
        setIsChecked(false);

        setTimeout(() => setIsSubmitted(false), 3000);
      },
      () => {
        setLoading(false);
        alert("Failed! Try again.");
      }
    );
};


  return (
    <section className="py-16 md:px-10">

      {/* Section Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Contact</h2>

        <p className="max-w-2xl mx-auto dark:text-gray-300">
          Interested in hiring me for your project or just want to say hi? 
          Fill in the form below or send me an email at
          <a
            href="mailto:tusharmohta001@gmail.com"
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
            { platform: "github", url: "https://github.com/TusharMohta001" },
          ].map(({ platform, url }, index) => (
            <a
              key={index}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 text-blue-400 rounded-full border flex items-center justify-center 
              dark:hover:bg-white hover:bg-[#acacac] hover:text-black transition-all"
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
            <h4 className="text-lg font-semibold">Phone</h4>
            <p>+91 8290942305</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Location</h4>
            <p>Bikaner, Rajasthan, India</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Email</h4>
            <p>tusharmohta001@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <h2 className="text-4xl font-bold mb-6 text-center">Get In Touch</h2>

      {isSubmitted && (
        <p className="text-green-500 text-lg mb-4 text-center">
          ✅ Your message has been submitted!
        </p>
      )}

     <form onSubmit={sendEmail} name="contact-form" className="grid md:grid-cols-2 gap-4">

        <input
          type="text"
          name="name"
          placeholder="Your Name*"
          className="p-3 rounded dark:bg-[#3f3f3f] bg-[#dcdcdc]"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email address*"
          className="p-3 rounded dark:bg-[#3f3f3f] bg-[#dcdcdc]"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone*"
          className="p-3 rounded dark:bg-[#3f3f3f] bg-[#dcdcdc]"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location*"
          className="p-3 rounded dark:bg-[#3f3f3f] bg-[#dcdcdc]"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message*"
          rows="5"
          className="p-3 rounded dark:bg-[#3f3f3f] bg-[#dcdcdc] md:col-span-2"
          required
        ></textarea>

        {/* Checkbox */}
        <div className="flex items-center gap-2 md:col-span-2">
          <input
            type="checkbox"
            id="agree"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="agree" className="text-sm dark:text-gray-300">
            Agree to send my information
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isChecked || loading}
          className={`md:col-span-2 px-6 py-3 mt-2 rounded-full font-semibold w-fit transition-all
            ${
              isChecked
                ? "bg-blue-500 hover:bg-blue-600 cursor-pointer"
                : "bg-blue-300 cursor-not-allowed text-gray-700"
            }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
