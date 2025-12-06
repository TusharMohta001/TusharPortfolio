import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFilePdf,
} from "react-icons/fa";

export default function App() {
  return (
    <>
      {/* Header Section */}
      <div className="text-center py-20 sm:py-30 dark:bg-[#2e2e2e] px-4">
        <h2 className="text-2xl sm:text-3xl font-bold Mons mb-6">Online Resume</h2>
        <a
          href="../resume/Tushar Resume.pdf"
          download
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 sm:py-3 px-4 sm:px-6 rounded-full text-md sm:text-lg transition duration-300"
        >
          <FaFilePdf className="text-lg sm:text-xl" />
          Download PDF Version
        </a>
      </div>

      {/* Main Resume Section */}
      <div className="font-sans sm:px- md:px-8 lg:px-12 py-10">
        <div className="max-w-6xl mx-auto dark:bg-[#3a3a3a] bg-[#e2e2e2] rounded-2xl shadow-xl p-6 sm:p-10 md:p-12">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            {/* Left Section */}
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400">
                Tushar Mohta
              </h1>
              <p className="text-sm sm:text-xl font-semibold Mons mt-2 ml-1">
                Senior Software Engineer
              </p>
            </div>

            {/* Right Section */}
            <div className="space-y-1 text-sm sm:text-md border-t lg:border-t-0 lg:border-l border-gray-500 pt-4 lg:pt-0 lg:pl-6">
              <p className="flex items-center gap-2">
                <FaPhoneAlt /> +91 8290942305
              </p>
              <p className="flex items-center gap-2">
                <FaEnvelope /> tusharmohta001@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <FaGithub /> <a href="https://github.com/TusharMohta001/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" underline cursor-pointer" >@/tusharmohta001</a>
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt /> Bikaner, India
              </p>
            </div>
          </div>

          {/* Summary */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mt-10 border-t border-gray-600 pt-8">
            <img
              src="/images/TUSHAR.png"
              alt="Tushar Mohta"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-500 object-cover object-top mx-auto md:mx-0"
            />
            <p className="text-md sm:text-lg Nunito leading-relaxed text-center md:text-left">
              I’m <span className="text-blue-400 font-semibold">Tushar Mohta</span>,
              a passionate Frontend Developer with expertise in{" "}
              <span className="font-medium  text-blue-400">
                React, Tailwind CSS, Next.js, and GSAP
              </span>. I enjoy crafting clean, responsive, and user-friendly web interfaces.
              My goal is to contribute to meaningful projects and grow as a developer while
              delivering impactful digital experiences.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 border-t border-gray-600 pt-8 relative">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Work Experience */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 border-l-4 border-blue-500 pl-3 mb-4">
                  Work Experience
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex flex-col sm:flex-row justify-between gap-2 text-[#5e5e5e] font-semibold">
                      <p className="Mons text-lg dark:text-[#a6a6a6]">
                        Frontend Developer Intern
                      </p>
                      <span className="text-sm dark:text-[#a6a6a6]">
                        iWebwiser | Feb 2025 - May 2025
                      </span>
                    </div>
                    <ul className="list-disc pl-1 mt-2 ml-5 sm:ml-10 text-sm sm:text-md Poppins space-y-1">
                      <li className='my-2 text-md Poppins'>Developed responsive user interfaces using React.js</li> <li className='my-2 text-md Poppins'>Integrated APIs and managed version control with Git</li> <li className='my-2 text-md Poppins'>Collaborated with UI/UX designers</li> <li className='my-2 text-md Poppins'>Built responsive and reusable UI components using React.js and Tailwind CSS</li> <li className='my-2 text-md Poppins'>Integrated RESTful APIs and managed application state efficiently</li> <li className='my-2 text-md Poppins'>Used Git and GitHub for version control and collaborated via pull requests</li> <li className='my-2 text-md Poppins'>Participated in Agile stand-ups and sprint planning meetings</li> <li className='my-2 text-md Poppins'>Worked closely with designers to convert Figma designs into functional UI</li> <li className='my-2 text-md Poppins'>Optimized website performance and ensured cross-browser compatibility</li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex flex-col sm:flex-row justify-between gap-2 text-[#5e5e5e] font-semibold">
                      <p className="Mons dark:text-[#a6a6a6]">Hackathon Team Leader</p>
                      <span className="text-sm dark:text-[#a6a6a6]">BJS College | 2024</span>
                    </div>
                    <ul className="list-disc pl-1 mt-2 ml-5 sm:ml-10 text-sm sm:text-md Poppins space-y-1">
                      <li className='my-2 text-md Poppins'>Led a team for a 24-hour hackathon challenge</li> <li className='my-2 text-md Poppins'>Managed UI design and project deployment</li> <li className='my-2 text-md Poppins'>Collaborated with team members to build a full-stack web application under tight deadlines</li> <li className='my-2 text-md Poppins'>Actively contributed to front-end development and real-time problem-solving</li> <li className='my-2 text-md Poppins text-green-400'>Secured 1st position among all participating teams</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 border-l-4 border-blue-500 pl-3 mb-4">
                  Projects
                </h2>
                <div className="space-y-4 text-sm sm:text-md">
                  <div>
                    <h3 className="font-semibold dark:text-[#a5a5a5] Nunito">
                      YCT Game - 3D Website
                    </h3>
                    <p>React, Tailwind CSS, Lenis</p>
                    <p className="ml-5 sm:ml-10">
                      Built a smooth-scroll 3D interface with Lenis for gaming UI.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold dark:text-[#a5a5a5] Nunito">
                      E-Commerce Web App
                    </h3>
                    <p>React, REST API, Auth</p>
                    <p className="ml-5 sm:ml-10">
                      Developed dashboards, authentication & product tools.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold dark:text-[#a5a5a5] Nunito">
                      Interactive 3D Portfolio
                    </h3>
                    <p>React, Three.js, Tailwind CSS</p>
                    <p className="ml-5 sm:ml-10">
                      Designed a 3D portfolio using Three.js and camera controls.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold dark:text-[#a5a5a5] Nunito">
                      E-Commerce Website (LocalStorage)
                    </h3>
                    <p>React, Tailwind CSS, LocalStorage</p>
                    <p className="ml-5 sm:ml-10">
                      Created a frontend-only e-commerce app using LocalStorage for cart and wishlist management.
                    </p>
                  </div>
                </div>
              </section>

              {/* Social Links */}
              <div className="hidden md:flex flex-wrap gap-4 sm:gap-6  mt-8 text-blue-400 text-sm justify-center border-t pt-6 border-gray-600">
                <a href="https://github.com/TusharMohta001/" target="_blank" className="flex items-center gap-1">
                  <FaGithub /> github.com/tusharmohta
                </a>
                <a href="https://www.linkedin.com/in/tushar-mohta-b5409733a/" target="_blank" className="flex items-center gap-1">
                  <FaLinkedin /> linkedin.com/in/tusharmohta
                </a>
                <a href="https://x.com/TusharMohta001" target="_blank" className="flex items-center gap-1">
                  <FaTwitter /> @tusharmohta
                </a>
              </div>
            </div>

            <div className="flex md:hidden border-t mt-[-20px]  border-gray-600">

            </div>

            {/* Right Column */}
            <div className="space-y-10">
              {/* Skills */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 border-l-4 border-blue-500 pl-3 mb-4">
                  Skills
                </h2>
                <div className="space-y-4 text-sm sm:text-md">
                  <div>
                    <h3 className="font-semibold text-xl Mons">Technical Skills</h3>
                    <ul className="list-disc ml-6 sm:ml-9 space-y-1">
                      <li>HTML, CSS</li>
                      <li>JavaScript / React / Vue</li>
                      <li>Node.js, Express, MongoDB</li>
                      <li>GSAP, Three.js, Tailwind CSS</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl Mons">Soft Skills</h3>
                    <ul className="list-disc ml-6 sm:ml-9 space-y-1">
                      <li>Team Leadership</li>
                      <li>Problem Solving</li>
                      <li>Time Management</li>
                      <li>Communication</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 border-l-4 border-blue-500 pl-3 mb-4">
                  Education
                </h2>
                <p>Bachelor of Computer Applications (BCA) <br /> MGSU, Bikaner | 2022 - 2025</p>
              </section>

              {/* Languages */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 border-l-4 border-blue-500 pl-3 mb-4">
                  Languages
                </h2>
                <ul className="list-disc ml-6 sm:ml-10 space-y-1">
                  <li>English (Fluent)</li>
                  <li>Hindi (Native)</li>
                </ul>
              </section>

              {/* Interests */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 border-l-4 border-blue-500 pl-3 mb-4">
                  Interests
                </h2>
                <ul className="list-disc ml-6 sm:ml-10 space-y-1">
                  <li>UI Design</li>
                  <li>Tech Events</li>
                  <li>Gaming</li>
                  <li>Traveling</li>
                  <li>Photography</li>
                </ul>
              </section>

              {/* Awards */}
              <section>
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 border-l-4 border-blue-500 pl-3 mb-4">
                  Awards
                </h2>
                <ul className="ml-5 sm:ml-8 space-y-2">
                  <li>🏆 Top 10 in HackThod 2024 (48-hour coding hackathon)</li>
                  <li>🏆 Featured 3D website in college tech fest</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
