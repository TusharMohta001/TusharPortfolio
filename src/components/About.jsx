import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import Lenis from 'lenis'
import { ArrowRightFromLine, FileUser } from "lucide-react";
import CountUp from "react-countup";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import allProjects from "../Data/projects";
import { useInView } from "react-intersection-observer"; // 👈 Added this import
import { Link } from "react-router-dom";



gsap.registerPlugin(ScrollTrigger);

const About = () => {


  const navigate = useNavigate();
  const [selected, setSelected] = useState(false);

  const filteredProjects = selected
    ? allProjects        // selected = true → show ALL
    : allProjects.slice(0, 4);  // selected = false → show only 4

    

    const handleMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
    
      e.currentTarget.style.setProperty("--x", `${x}%`);
      e.currentTarget.style.setProperty("--y", `${y}%`);
    };
  

  useEffect(() => {
    gsap.from(".reveal-text", {
      scrollTrigger: {
        trigger: ".reveal-text",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      opacity: 0,
      y: 100,
    });
  }, []);

  // 👇 Use Intersection Observer for CountUp animation
  const { ref: countRef, inView: countInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });


  const testimonials = [
    {
      text: "Tushar created our website with stunning animations and perfect UI!",
      name: "Rishabh Panwar",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQGRJEj9zXCbtQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1701852334982?e=1766620800&v=beta&t=uvxQB8wl0M1MhI7OMz4CDsLYtXSvPRJ5CsUWTeU2dhc"
    },
    {
      text: "Highly professional and delivers work on time. Great experience!",
      name: "Ayushi",
      avatar: "https://p1.hiclipart.com/preview/583/854/345/woman-hair-female-anonymous-silhouette-avatar-user-profile-girl-face-png-clipart.jpg"
    },
    {
      text: "Great communication and very creative approach.",
      name: "Priyanshu Prajapat",
      avatar: "https://media.licdn.com/dms/image/v2/D4D03AQHGxkedED3p1Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728441200708?e=1766620800&v=beta&t=s88Xi2c2Xij3aSuCOle2UASVTwrbpWo7Izi4bZjR_-s"
    },
    {
      text: "Outstanding React and frontend skills. The project turned out amazing!",
      name: "Tanya",
      avatar: "https://p1.hiclipart.com/preview/583/854/345/woman-hair-female-anonymous-silhouette-avatar-user-profile-girl-face-png-clipart.jpg"
    },
    {
      text: "Clean, modern design. Smooth animations. Loved it!",
      name: "Naveen Suthar",
      avatar: "https://media.licdn.com/dms/image/v2/D5603AQEmfu3Dhpuo6w/profile-displayphoto-crop_800_800/B56Zl7oHZFG4AI-/0/1758715738178?e=1766620800&v=beta&t=hVx62Ytv1zpys7rIkRQiz6ulS_MKvfeYxUpT6EivdVE"
    },
  ];


  const languages = [
    {
      title: "HTML & CSS",
      icons: [
        <i className="fa-brands fa-html5 text-orange-500"></i>,
        <i className="fa-brands fa-css3 text-blue-400"></i>,
      ],
      subtitle: "Web Structure & Styling",
      paragraph:
        "Craft clean, semantic layouts using HTML and style them beautifully with responsive CSS designs.",
    },
    {
      title: "React & JavaScript",
      icons: [
        <i className="fa-brands fa-js text-yellow-400"></i>,
        <i className="fa-brands fa-react text-blue-500"></i>,
      ],
      subtitle: "Frontend Development",
      paragraph:
        "Develop dynamic, interactive user interfaces with React and manage application logic using JavaScript.",
    },
    {
      title: "Python & AI",
      icons: [<i className="fa-brands fa-python text-yellow-200"></i>],
      subtitle: "Automation & Machine Learning",
      paragraph:
        "Leverage Python for data processing, AI model creation, and workflow automation to build intelligent systems.",
    },
    {
      title: "Node.js & APIs",
      icons: [<i className="fa-brands fa-node-js text-green-500"></i>],
      subtitle: "Backend Development",
      paragraph:
        "Build fast, scalable backend services and RESTful APIs using Node.js and Express for seamless data flow.",
    },
    {
      title: "Git & GitHub",
      icons: [
        <i className="fa-brands fa-git-alt text-red-300"></i>,
        <i className="fa-brands fa-github text-white"></i>,
      ],
      subtitle: "Version Control & Collaboration",
      paragraph:
        "Manage code efficiently using Git and collaborate on open-source and private projects via GitHub.",
    },
    {
      title: "Design & Animation",
      icons: [<i className="fa-brands fa-figma text-pink-400"></i>],
      subtitle: "UI/UX & Motion Design",
      paragraph:
        "Design intuitive user interfaces and add smooth animations using Figma, Framer Motion, and modern UI tools.",
    },
  ];

  return (
    <>
      {/* ========== INTRO SECTION ========== */}
      <div className="md:px-20 pt-20 md:pt-40 dark:bg-[#292929] dark:text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* ---- Left Text ---- */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl font-medium mb-3 font-[Playfair_Display]">
              Hi, I'm a Freelancer
            </h1>
            <span className="text-[#5271FF] text-4xl md:text-7xl font-bold font-[Playfair_Display]">
              <Typewriter
                words={["Developer", "Designer", "Web Builder"]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </span>
            <h4 className="text-base md:text-lg mt-6 md:mt-9 md:w-[90%]">
              I'm a software engineer specializing in scalable web apps. Explore
              my{" "}
              <span className="text-[#5271FF] cursor-pointer text-xl">
                blog
              </span>
              ,{" "}
              <span className="text-[#5271FF] cursor-pointer text-xl">
                project portfolio
              </span>{" "}
              and{" "}
              <span className="text-[#5271FF] cursor-pointer text-xl">
                online resume
              </span>
              .
            </h4>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8">
              <button
                onClick={() => navigate("/projects")}
                className="relative group overflow-hidden bg-[#5271FF] text-white font-medium px-6 py-4 rounded-4xl flex items-center justify-center gap-2 transition-all duration-300 ease-in-out"
              >
                <span className="z-10 flex items-center gap-2 relative">
                  <ArrowRightFromLine />
                  View Projects
                </span>
                <div className="absolute inset-0 bg-white opacity-10 scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 origin-center" />
                <div className="absolute inset-0 border border-transparent group-hover:border-white/20 rounded-3xl transition-all duration-300 shadow-none group-hover:shadow-[0_8px_20px_rgba(82,113,255,0.4)]" />
              </button>

              <button
                onClick={() => navigate("/resume")}
                className="relative group overflow-hidden bg-[#4F4F4F] text-white font-medium px-6 py-4 rounded-4xl flex items-center justify-center gap-2 transition-all duration-300 ease-in-out"
              >
                <span className="z-10 flex items-center gap-2 relative">
                  <FileUser />
                  View resume
                </span>
                <div className="absolute inset-0 bg-white opacity-10 scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 origin-center" />
                <div className="absolute inset-0 border border-transparent group-hover:border-white/20 rounded-3xl transition-all duration-300 shadow-none group-hover:shadow-[0_8px_20px_rgba(0,0,0,0.4)]" />
              </button>
            </div>
          </div>

          {/* ---- Right Image ---- */}
          <div className="relative w-[250px] h-[300px] md:w-[350px] md:h-[400px] flex justify-center items-center mt-10 md:mt-0">
            {/* Animated Background */}
            <div className="absolute top-0 left-0 w-[250px] h-[300px] md:w-[350px] md:h-[400px] bg-gradient-to-r from-[#5271FF] to-[#00C6FF] rounded-xl animate-slide opacity-70 blur-md"></div>

            {/* Image */}
            <div className="relative w-[250px] h-[300px] md:w-[350px] md:h-[400px] bg-white dark:bg-[#1E1E1E] overflow-hidden z-10 rounded-xl shadow-lg">
              <img
                loading="lazy"
                className="w-full h-full object-cover scale-110 origin-top"
                src="/images/TUSHAR.png"
                alt="Tushar"
              />
            </div>
          </div>
        </div>

        {/* ---- CountUp Section ---- */}
        <div ref={countRef} className="flex flex-wrap justify-center md:justify-start gap-8 mt-20">
          <div className="flex items-center gap-2">
            <h2 className="text-6xl md:text-7xl text-blue-600 font-bold font-[Montserrat]">
              {countInView && <CountUp end={3} duration={1.5} />}
            </h2>
            <div className="text-3xl md:text-4xl font-light">|</div>
            <p className="text-sm md:text-md font-[Playfair_Display] w-20">
              Years of Experience
            </p>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-6xl md:text-7xl text-blue-600 font-bold font-[Montserrat]">
              {countInView && <CountUp end={20} duration={1.5} />}+
            </h2>
            <div className="text-3xl md:text-4xl font-light">|</div>
            <p className="text-sm md:text-md font-[Playfair_Display] w-20">
              Projects Completed
            </p>
          </div>
          <div className="flex items-center gap-2">
            <h2 className="text-6xl md:text-7xl text-blue-600 font-bold font-[Montserrat]">
              {countInView && <CountUp end={3} duration={1.5} suffix="K" />}
            </h2>
            <div className="text-3xl md:text-4xl font-light">|</div>
            <p className="text-sm md:text-md font-[Playfair_Display] w-20">
              Clients Worldwide
            </p>
          </div>
        </div>
      </div>

      <hr className="mt-20 text-[#676767]" />






      {/* ========== WHAT I DO SECTION ========== */}
      <div className="px-1 md:px-10 mt-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
          <div>
            <div className="text-6xl mr-2 text-[#5271FF] font-light float-left">
              |
            </div>
            <h1 className="play text-5xl md:text-6xl font-bold mb-6">
              What I do
            </h1>
            <p className="w-full md:w-[80%] Mons text-md ">
              I have more than 3 years experience building software for clients
              all over the world. Below is a quick overview of my main technical
              skill sets and technologies I use. Want to find out more about my
              experience? Check out my{" "}
              <span className="text-[#5271FF] cursor-pointer text-sm">
                online resume
              </span>{" "}
              and{" "}
              <span className="text-[#5271FF] cursor-pointer text-sm">
                project portfolio
              </span>
              .
            </p>
          </div>

          <button  onClick={() => navigate("/services")}  className="relative group overflow-hidden bg-[#5271FF] text-white font-medium px-6 py-4 rounded-4xl flex items-center gap-2 transition-all duration-300 ease-in-out w-full md:w-[30%] justify-center">
            <span className="z-10 flex items-center gap-2 relative">
              <ArrowRightFromLine />
              Services & Pricing
            </span>
            <div className="absolute inset-0 bg-white opacity-10 scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 origin-center" />
            <div className="absolute inset-0 border border-transparent group-hover:border-white/20 rounded-3xl transition-all duration-300 shadow-none group-hover:shadow-[0_8px_20px_rgba(82,113,255,0.4)]" />
          </button>
        </div>

        <div className="flex flex-wrap gap-6 justify-center items-center py-6">
  {languages.map((item, index) => (
    <div
      key={index}
      onMouseMove={handleMove}
      className="skill-pro w-[210px] sm:w-[45%] md:w-[330px] h-[300px]
      rounded-xl p-5 transition-all duration-300
      bg-white dark:bg-[#2C2C2C]"
    >
      <div className="text-3xl flex gap-3 mb-2">
        {item.icons.map((icon, i) => (
          <span key={i}>{icon}</span>
        ))}
      </div>

      <h2 className="text-2xl font-bold mb-2">{item.title}</h2>

      <p className="text-sm text-blue-500 dark:text-blue-300 mb-2">
        {item.subtitle}
      </p>

      <p className="text-sm text-gray-700 dark:text-gray-200">
        {item.paragraph}
      </p>
    </div>
  ))}
</div>



      </div>

      <hr className="mt-20 text-[#676767]" />

      {/* ========== Projects ========== */}
      <div className="px-1 md:px-10 mt-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
          <div>
            <div>

              <div className="text-6xl mr-2 text-[#5271FF] font-light float-left">
                |
              </div>
              <h1 className="play text-5xl md:text-6xl font-bold mb-6  ">My Project</h1>

              <p className="w-full md:w-[90%] Mons text-md mb-10">
                I'm Tushar — a frontend developer passionate about building beautiful,
                user-friendly, and fast websites using
                <span className="text-[#5271FF] cursor-pointer text-sm "> React </span>, <span className="text-[#5271FF] cursor-pointer text-sm"> Tailwind CSS </span>, <span className="text-[#5271FF] cursor-pointer text-sm"> Vite </span>, and
                <span className="text-[#5271FF] cursor-pointer text-sm"> modern web technologies </span>. I love creating clean UI, smooth interaction,
                and responsive layouts.
              </p>
            </div>




            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="holo-card bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 p-4 transition"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />

                  <Link
                    to={`/projects/${project.title}`}
                    className="w-8 h-8 rounded-full flex items-center justify-center float-end bg-gray-700 hover:bg-blue-500 transition"
                  >
                    <span className="text-white">↗</span>
                  </Link>

                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.tags.join(", ")}</p>
                </div>
              ))}
            </div>
          </div>


        </div>

        {/* Centered Button */}
        <div className="mt-14 flex justify-center w-full">
          <button
            onClick={() => navigate("/projects")}
            className="relative group w-fit overflow-hidden bg-[#5271FF] text-white font-medium px-6 py-4 rounded-4xl flex items-center justify-center gap-2 transition-all duration-300 ease-in-out"
          >
            <span className="z-10 flex items-center gap-2 relative">
              <ArrowRightFromLine />
              View Projects
            </span>
            <div className="absolute inset-0 bg-white opacity-10 scale-0 group-hover:scale-150 rounded-full transition-transform duration-500 origin-center" />
            <div className="absolute inset-0 border border-transparent group-hover:border-white/20 rounded-3xl transition-all duration-300 shadow-none group-hover:shadow-[0_8px_20px_rgba(82,113,255,0.4)]" />
          </button>
        </div>

      </div>

      <hr className="mt-20 text-[#676767]" />

      <div>
        {/* ========== Testimonials Section ========== */}
        <section className="py-20 ">
          <div className="flex flex-col md:flex-row items-end justify-center gap-6">
            <div>
            <div className="text-6xl mr-2 text-[#5271FF] font-light float-left">
                |
              </div>
              <h1 className="play text-[42px] md:text-6xl font-bold mb-6 ">Testimonials</h1>

              <p className="w-full  md:w-[80%] Mons text-md dark:text-gray-300 mb-10 leading-relaxed ">
                Here’s what clients say about working with me. I focus on delivering
                <span className="text-[#5271FF] cursor-pointer text-sm"> clean designs </span>,
                <span className="text-[#5271FF] cursor-pointer text-sm"> smooth animations </span>
                and a
                <span className="text-[#5271FF] cursor-pointer text-sm"> seamless user experience </span>.
                Every project is built with dedication and
                <span className="text-[#5271FF] cursor-pointer text-sm"> attention to detail </span>,
                ensuring clients always get more than they expect.
              </p>

              <div className="testimonial-wrapper md:h-60 -ml-20 md:ml-1 py-3 w-screen md:w-[80vw]  overflow-hidden relative">

                <div className="testimonial-slider  space-x-6 ">

                  {testimonials.concat(testimonials).map((item, i) => (
                    <div
                      key={i}
                      className="md:min-w-[350px] w-[250px] bg-zinc-900 border border-zinc-700 
                       rounded-2xl p-6 shadow-xl
                       hover:scale-105 hover:border-purple-500
                       hover:shadow-purple-500/30 transition-all duration-500"
                    >
                      <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                        “{item.text}”
                      </p>

                      <div className="flex items-center space-x-3">
                        <img
                          src={item.avatar}
                          className="w-12 h-12 rounded-full border border-zinc-600"
                        />
                        <div>
                          <p className="text-white font-semibold">{item.name}</p>
                          <p className="text-purple-400 text-sm">Client Review</p>
                        </div>
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        <hr className=" text-[#676767]" />



        <footer className="py-6 mt-2  border-t border-zinc-800 text-center">
          <p className="text-gray-400 text-sm -mx-5 md:text-2xl ">
            © {new Date().getFullYear()} Tushar — Frontend Developer. All Rights Reserved.
          </p>

          <div className="flex justify-center gap-4 mt-3">
            <a href="https://github.com" className="text-gray-400 hover:text-white">GitHub</a>
            <a href="https://linkedin.com" className="text-gray-400 hover:text-white">LinkedIn</a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white">Instagram</a>
          </div>
        </footer>



      </div>



    </>
  );
};

export default About;
