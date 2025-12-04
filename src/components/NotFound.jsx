import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-7xl font-bold text-[#5271FF] mb-4">404</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="bg-[#5271FF] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#425ed1] transition-all"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
