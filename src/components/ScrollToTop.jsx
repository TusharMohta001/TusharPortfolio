// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top after route change
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant", // change to "smooth" if you want animation
      });
    }, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
