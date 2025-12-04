import { useEffect, useState } from "react";
import Loader from "./components/Loader"; // 👈 import here
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import { Moon, Sun } from "lucide-react";
import ProjectDetails from "./components/ProjectDetails";

import ScrollToTop from "./components/ScrollToTop"; // 👈 Make sure this file exists
import Cursor from "./components/Cursor";

function App() {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    let current = window.scrollY;
    let target = current;
    let ease = 0.08; // Smoothness

    function smoothScroll() {
      current = current + (target - current) * ease;
      window.scrollTo(0, current);
      requestAnimationFrame(smoothScroll);
    }

    window.addEventListener("scroll", () => {
      target = window.scrollY;
    });

    requestAnimationFrame(smoothScroll);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);


  

  // Loader timeout
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, []);

  if (loading) return <Loader />; // 👈 Show loader first

  return (
    <Router>
      <ScrollToTop /> {/* 👈 Scroll reset works on every route change */}
      <MainContent theme={theme} toggleTheme={toggleTheme} />
    </Router>
  );
}

// 👇 Separated layout to re-render on route change (for scroll reset reliability)
function MainContent({ theme, toggleTheme }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="flex h-screen bg-[#e5e5e5] dark:bg-[#292929] dark:text-white py-3 px-4">
      <Cursor/>
      <div className="m-2 flex flex-col absolute z-10">
        <button
          onClick={toggleTheme}
          className="w-6 h-6 mb-20 rounded-full bg-[#5271FF] shadow-md cursor-pointer text-white flex items-center justify-center transition-all ease-in-out"
        >
          {theme === "light" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/projects/:title" element={<ProjectDetails />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:title" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
