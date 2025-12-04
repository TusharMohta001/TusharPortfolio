import {
  Mail,
  Send,
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  User,
  FileScan,
  BriefcaseBusiness,
  FileUser,
  NotebookText,
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  // Function to check if a path is active (for nested pages)
  const isPathActive = (path) => location.pathname.startsWith(path);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex dark:bg-[#4F4F4F] bg-[#a9a9a9] w-60 shadow-md px-4 py-10 text-center flex-col justify-between">
        <div>
          <div className="flex justify-center relative mb-4">
            <div className="w-24 h-24 overflow-hidden bg-[#5271FF] rounded-full">
              <img
                loading="lazy"
                src="/images/TUSHAR.png"
                alt="Tushar"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="w-8 h-8 absolute right-12 -bottom-2 text-xl rounded-full font-bold bg-black flex items-center justify-center">
              👋
            </div>
          </div>

          <h2 className="text-xl font-bold font-[Nunito_Sans]">
            Tushaar Mohta
          </h2>
          <h2 className="text-sm mb-2 font-[Montserrat]">
            Senior Software Engineer
          </h2>

          {/* Social Icons */}
          <div className="mb-4 flex gap-3 items-center justify-center">
            <SocialIcon
              Icon={Instagram}
              link="https://www.instagram.com/tusharmohtaa/"
            />
            <SocialIcon
              Icon={Facebook}
              link="https://www.facebook.com/tusharmohtaa/"
            />
            <SocialIcon
              Icon={Linkedin}
              link="https://www.linkedin.com/in/tushar-mohta-b5409733a/"
            />
            <SocialIcon Icon={Twitter} link="https://x.com/home" />
          </div>

          <hr className="mb-5" />

          {/* Navigation Links */}
          <nav className="space-y-4">
            <SidebarItem
              icon={<User size={20} />}
              label="About"
              path="/"
              isActive={location.pathname === "/"}
            />
            <SidebarItem
              icon={<FileScan size={20} />}
              label="Projects"
              path="/projects"
              isActive={isPathActive("/projects")}
            />
            <SidebarItem
              icon={<BriefcaseBusiness size={20} />}
              label="Services & Pricing"
              path="/services"
              isActive={isPathActive("/services")}
            />
            <SidebarItem
              icon={<FileUser size={20} />}
              label="Resume"
              path="/resume"
              isActive={isPathActive("/resume")}
            />
            <SidebarItem
              icon={<NotebookText size={20} />}
              label="Blog"
              path="/blog"
              isActive={isPathActive("/blog")}
            />
            <SidebarItem
              icon={<Mail size={20} />}
              label="Contact"
              path="/contact"
              isActive={isPathActive("/contact")}
            />
          </nav>
        </div>

        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.location.href = "/contact";
          }}
          className="flex items-center justify-center text-xl gap-2 px-6 py-3 rounded-3xl bg-blue-500 text-white border border-blue-500 hover:bg-transparent hover:text-blue-500 transition duration-300 mt-6"
        >
          <Send className="w-5 h-5" />
          Hire Me
        </button>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#4F4F4F] border-t border-gray-600 z-50 flex justify-around items-center py-2">
        <BottomNavItem icon={<User size={22} />} path="/" />
        <BottomNavItem icon={<FileScan size={22} />} path="/projects" />
        <BottomNavItem icon={<BriefcaseBusiness size={22} />} path="/services" />
        <BottomNavItem icon={<FileUser size={22} />} path="/resume" />
        <BottomNavItem icon={<NotebookText size={22} />} path="/blog" />
        <BottomNavItem icon={<Mail size={22} />} path="/contact" />
      </div>
    </>
  );
};

// Reusable Sidebar Item
const SidebarItem = ({ icon, label, path, isActive }) => (
  <NavLink
    to={path}
    className={`flex items-center space-x-3 cursor-pointer transition duration-300 p-2 rounded-md ${
      isActive ? "bg-blue-500 text-white" : "hover:text-white hover:bg-blue-400"
    }`}
  >
    {icon}
    <span>{label}</span>
  </NavLink>
);

const BottomNavItem = ({ icon, path }) => (
  <NavLink
    to={path}
    className={({ isActive }) =>
      `transition duration-300 ${
        isActive ? "text-blue-500" : "text-white hover:text-blue-400"
      }`
    }
  >
    {icon}
  </NavLink>
);

const SocialIcon = ({ Icon, link }) => (
  <div
    className="w-7 h-7 rounded-full text-blue-400 border cursor-pointer hover:bg-blue-500 hover:text-white transition flex items-center justify-center"
    onClick={() => window.open(link, "_blank")}
  >
    <Icon className="w-4 h-4" />
  </div>
);

export default Sidebar;
