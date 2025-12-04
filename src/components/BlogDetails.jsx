// BlogDetails.jsx
import { useParams, Link } from 'react-router-dom';
import blogs from '../Data/blogData';
import { useEffect } from 'react';

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogs.find((item) => item.slug === slug);



  if (!blog) {
    return (
      <div className="text-center text-white  min-h-screen p-10">
        <h2 className="text-3xl font-bold mb-4">Blog Not Found</h2>
        <Link to="/blog" className="text-blue-500 underline">← Go Back</Link>
      </div>
    );
  }

  return (

    <div className="bg-[#2e2e2e] text-white min-h-screen p-6 sm:p-10">
      <div className="max-w-4xl mx-auto space-y-10">

        {/* Blog Top Image */}
        <img src={blog.image1} alt={blog.title} className="rounded-lg w-full h-64 object-cover" />

        {/* Blog Title + Date */}
        <div>
          <p className="text-sm text-gray-400">{blog.date} / {blog.tags?.[0]}</p>
          <h1 className="text-3xl font-bold mt-2 mb-4">{blog.title}</h1>
        </div>

        {/* Long Description & Descriptions */}
        <div className="space-y-4 text-gray-300">
          <p>{blog.long_description}</p>
          <p>{blog.description1}</p>
          <p>{blog.description2}</p>
        </div>

        {/* Example Image */}
        {blog.image2 && (
          <img src={blog.image2} alt="Example" className="rounded-md w-full object-cover" />
        )}

        {/* Key Points */}
        {blog.points?.length > 0 && (
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {blog.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}

        {/* Video Embed */}
        {blog.video && (
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded"
              src={blog.video}
              title="Video"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Tags Section */}
        <div className="mt-8">
          <h4 className="font-semibold mb-2">Tags:</h4>
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-gray-700 rounded-full text-sm">{tag}</span>
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <h3 className="text-xl font-bold mb-4">3 Comments</h3>

          {[1, 2, 3].map((id) => (
            <div key={id} className="flex gap-4 items-start mb-6">
              <img src={`https://i.pravatar.cc/100?img=${id + 10}`} alt="User" className="w-12 h-12 rounded-full" />
              <div>
                <p className="font-semibold">User {id}</p>
                <p className="text-sm text-gray-400">March 2025</p>
                <p className="text-gray-300 mt-1">This blog is very informative and helped me understand the topic better!</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Form */}
        <div className="bg-[#1e1e1e] p-6 rounded-lg mt-10">
          <h4 className="text-xl font-bold mb-2">Leave a Reply</h4>
          <p className="text-sm text-gray-400 mb-6">Your email address will not be published. Required fields are marked *</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input placeholder="First Name" className="bg-[#2e2e2e] text-white p-3 rounded outline-none border border-gray-700" />
            <input placeholder="Last Name" className="bg-[#2e2e2e] text-white p-3 rounded outline-none border border-gray-700" />
          </div>
          <input placeholder="Enter Email" className="bg-[#2e2e2e] text-white p-3 rounded outline-none border border-gray-700 w-full mt-4" />
          <textarea placeholder="Your Message:" rows="4" className="bg-[#2e2e2e] text-white p-3 rounded outline-none border border-gray-700 w-full mt-4"></textarea>

          <div className="flex items-center mt-4">
            <input type="checkbox" id="save" className="mr-2" />
            <label htmlFor="save" className="text-sm text-gray-400">Save my name, email, and website in this browser for the next time.</label>
          </div>

          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-full">Post Comment</button>
        </div>

        {/* Suggested Blogs */}
        <div className="mt-16">
          <h4 className="text-xl font-bold mb-6">You Might Also Like</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.slice(0, 3).map((b, idx) => (
              <Link key={idx} to={`/blog/${b.slug}`} className="block bg-[#1e1e1e] rounded-xl overflow-hidden">
                <img src={b.image1} className="h-40 w-full object-cover" alt={b.title} />
                <div className="p-4">
                  <p className="text-sm text-gray-400">{b.date}</p>
                  <h5 className="font-semibold text-white mt-2 line-clamp-2">{b.title}</h5>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-8">
          <Link to="/blog" className="inline-block text-blue-400 hover:underline">← Back to Blogs</Link>
        </div>
      </div>
    </div>
  );
}
