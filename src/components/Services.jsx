import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FcContacts } from "react-icons/fc";

const Services = () => {


  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      ques: "What is Portfolify?",
      ans: "A modern, clean, and responsive portfolio template for developers, designers, and freelancers."
    },
    {
      ques: "How Can I Help You?",
      ans: "I help you showcase your skills, projects, and experience with a professional online presence."
    },
    {
      ques: "Simple process for workflow?",
      ans: "Choose layout → Add your content → Customize → Publish."
    },
    {
      ques:"Why responsive multi page template?",
      ans:"Better UX, fast navigation, SEO-friendly, and more professional."
    },
    {
      ques:"Is Portfolify a Multi-purpose template?",
      ans: "Yes, it works for portfolios, agencies, creatives, startups, and more."

    }
  ];

  const workflowSteps = [
    {
      title: "1. Discussion",
      desc: "We start by understanding your needs, goals, and vision for the project.",
      icon: "💬",
    },
    {
      title: "2. Planning",
      desc: "Creating wireframes, deciding structure, features, and project roadmap.",
      icon: "🧩",
    },
    {
      title: "3. Designing",
      desc: "UI/UX design using modern tools to ensure smooth and clean experience.",
      icon: "🎨",
    },
    {
      title: "4. Development",
      desc: "Turning designs into real, high-performance websites using modern tech.",
      icon: "⚙️",
    },
    {
      title: "5. Testing",
      desc: "Fixing bugs, improving speed, and ensuring everything works perfectly.",
      icon: "🧪",
    },
    {
      title: "6. Deployment",
      desc: "Website is deployed to hosting, domain connected, and final delivery.",
      icon: "🚀",
    },
  ];

  return (
    <section className=" py-16 md:px-10">

      {/* Intro Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold">Services & Workflow</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          I provide high-quality development services, from initial concept to final launch.
          Here's my complete working process.
        </p>
        <button
          onClick={() => window.location.href = "mailto:tusharmohta001@gmail.com"}
          className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold"
        >
          🚀 Hire Me
        </button>
      </div>

      {/* Workflow Section */}
      <div className="mb-16">
        <h3 className="text-2xl md:text-3xl font-bold border-l-4 border-blue-500 pl-2 mb-4">
          My Working Process
        </h3>
        <p className="mb-8 max-w-3xl">
          Here is how I take your idea and turn it into a complete product, step by step.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {workflowSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="dark:bg-[#2a2a2a] bg-gray-300 p-6 rounded-lg shadow hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-3">{step.icon}</div>
              <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h4 className="text-xl md:text-2xl font-semibold mb-2">
            Want to discuss your project?
          </h4>
          <p className="mb-4 max-w-2xl mx-auto">
            Let’s build something amazing together. I respond within 1 hour.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full  font-semibold"
          >
             <span className="z-10 flex items-center gap-2 relative">
            <FcContacts /> Contact Me</span>
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="grid md:grid-cols-2  gap-10">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold border-l-4 border-blue-500 pl-2 mb-4">
            Have any questions?
          </h3>
          <p className="mb-6 max-w-xl">
            You can use this section to address any queries your potential clients may have.
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
                    <p className="font-medium">{q.ques}</p>
                  </div>
                  <motion.span
                    animate={{ rotate: openIndex === idx ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-blue-400 text-xl"
                  >
                    {openIndex === idx ? "−" : "+"}
                  </motion.span>
                </div>

                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mt-2 text-sm text-gray-400">
                        {q.ans}
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
            src="/images/FAQ.png"
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
