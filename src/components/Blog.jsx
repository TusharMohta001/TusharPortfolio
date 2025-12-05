import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import blogs from '../Data/blogData';

const blogsPerPage = 9;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIdx = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIdx, startIdx + blogsPerPage);

  return (
    <div className="py-16 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            A Blog About Software Development And Life
          </h2>
          <p className="dark:text-gray-300 mb-6">
            Welcome to my blog. Subscribe and get my latest blog post in your inbox.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-80 px-4 py-3 rounded-full dark:bg-[#1e1e1e] border border-gray-600 placeholder-gray-400 focus:outline-none"
            />
            <button className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition font-medium rounded-full">
              <FaPaperPlane /> Subscribe
            </button>
          </div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
       {currentBlogs.map((blog, idx) => (
 <Link key={blog.id} to={`/blog/${blog.id}`}>
  <div className="dark:bg-[#1f1f1f] rounded-xl shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300">
    <div className="w-full h-48 overflow-hidden">
      <img src={blog.image1} alt={blog.title} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <p className="text-sm dark:text-gray-400">{blog.date} / {blog.tags[0]}</p>
      <h3 className="text-lg font-semibold mt-2 line-clamp-2">{blog.title}</h3>
      <p className="text-sm dark:text-gray-300 mt-1 line-clamp-2">{blog.short_description}</p>
    </div>
  </div>
</Link>

))}

        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 space-x-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-3 py-1 bg-gray-500 dark:bg-gray-700 rounded-full hover:bg-blue-500 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            &lt;
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded ${
                currentPage === i + 1
                  ? 'bg-blue-500'
                  : 'outline outline-1 outline-[#bcbcbc] rounded-full hover:bg-blue-400'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-3 py-1 dark:bg-gray-700 bg-gray-500 rounded-full hover:bg-blue-500 disabled:opacity-50"
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
