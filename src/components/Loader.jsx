// src/components/Loader.jsx
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-[#1e1e1e] dark:bg-[#000] flex flex-col items-center justify-center text-white z-[9999]">
      
      {/* 🔵🟥 Dual Spinning Loader */}
      <div className="flex-col gap-4 w-full flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"></div>
        </div>
      </div>

      {/* ✨ Animated Text */}
      <motion.h2
        className="mt-6 text-2xl font-semibold tracking-widest text-blue-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        TUSHAR MOHTA
      </motion.h2>

      <motion.p
        className="text-sm text-gray-400 mt-2 font-light"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Crafting Code & Creativity
      </motion.p>

      {/* 🔵 Progress Bar */}
      <motion.div
        className="w-48 h-1 bg-gray-700 rounded-full overflow-hidden mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <motion.div
          className="h-full bg-blue-500"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default Loader;
