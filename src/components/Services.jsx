import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    "What is Portfolify?",
    "How Can I Help You?",
    "Simple process for workflow?",
    "Why responsive multi page template?",
    "Is Portfolify a Multi-purpose template?",
  ];

  const packages = [
    {
      title: "Basic",
      price: "$900",
      features: [
        "Web Development",
        "UI/UX Design",
        "Webflow Development",
        "Website Optimization",
        "24/7 Support",
      ],
      tag: null,
    },
    {
      title: "Standard",
      price: "$2500",
      features: [
        "Web Development",
        "UI/UX Design",
        "Webflow Development",
        "Website Optimization",
        "24/7 Support",
      ],
      tag: "Most popular",
    },
    {
      title: "Premium",
      price: "$5000",
      features: [
        "Web Development",
        "UI/UX Design",
        "Webflow Development",
        "Website Optimization",
        "24/7 Support",
      ],
      tag: null,
    },
  ];

  return (
    <section className="px-4 py-16 md:px-10">
      {/* Services & Pricing Intro */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold">Services & Pricing</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          I have 10+ years of development experience building software for the web and
          mobile devices. You can take a look at my online resume and project
          portfolio to find out more about my skills and experiences.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold">
          🚀 Hire Me
        </button>
      </div>

      {/* Service Packages */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold border-l-4 border-blue-500 pl-2 mb-4">
          Service Packages
        </h3>
        <p className="mb-8 max-w-3xl">
          Explore the range of services I provide to help bring your projects to life.
          From initial concept to final delivery, I am committed to delivering
          high-quality results tailored to your needs.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="dark:bg-[#2a2a2a] bg-gray-300 p-6 rounded-lg shadow hover:shadow-xl relative transition-all duration-300 hover:-translate-y-1"
            >
              {pkg.tag && (
                <span className="absolute -top-3 right-3 text-xs bg-blue-500 px-2 py-1 rounded-full">
                  {pkg.tag}
                </span>
              )}
              <h4 className="text-xl font-semibold mb-2">{pkg.title}</h4>
              <p className="text-3xl font-bold text-blue-400">{pkg.price}</p>
              <p className="mb-4 text-sm text-gray-400">Per Month</p>
              <ul className="mb-4 space-y-2">
                {pkg.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-blue-400">●</span>
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="mt-auto w-full py-2 bg-blue-500 hover:bg-blue-600 rounded-full">
                → Choose {pkg.title}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h4 className="text-xl md:text-2xl font-semibold mb-2">
            Want to hire me for custom package?
          </h4>
          <p className="mb-4 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor
            incididunt ut labore et dolore.
          </p>
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold">
            🚀 Hire Me
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold border-l-4 border-blue-500 pl-2 mb-4">
            Have any questions?
          </h3>
          <p className="mb-6 max-w-xl">
            You can use this section to address any queries your potential clients may
            have.
          </p>

          <div className="space-y-4">
            {faqs.map((q, idx) => (
              <div
                key={idx}
                className={`dark:bg-[#2a2a2a] bg-gray-300 rounded-lg p-4 cursor-pointer transition-all duration-300 ${
                  openIndex === idx ? "shadow-lg ring-2 ring-blue-400" : ""
                }`}
                onClick={() => toggleFAQ(idx)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span>❓</span>
                    <p className="font-medium">{q}</p>
                  </div>
                  <motion.span
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-400 text-xl"
                  >
                    {openIndex === idx ? "−" : "+"}
                  </motion.span>
                </div>

                {/* Animated Answer */}
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="mt-2 text-sm text-gray-400">
                        This is a sample answer to the question: "{q}". Replace it with
                        your actual FAQ content.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden md:block mt-20">
          <img
            src="./public/images/FAQ.png"
            alt="FAQ illustration"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 flex justify-between items-center text-sm text-gray-500 border-t pt-6">
        <p>Copyright © 2025 Portfolify . All Rights Reserved.</p>
        <p>Designed by UIAXIS</p>
      </div>
    </section>
  );
};

export default Services;
