import { useParams, Link } from 'react-router-dom';
import blogs from '../Data/blogData';

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find(item => item.id === parseInt(id)); // id ko number me convert karo

  if (!blog) {
    return (
      <div className="text-center text-white min-h-screen p-10">
        <h2 className="text-3xl font-bold mb-4">Blog Not Found</h2>
        <Link to="/blog" className="text-blue-500 underline">← Go Back</Link>
      </div>
    );
  }

  return (
<div className="bg-white text-black dark:bg-[#1f1f1f] dark:text-white min-h-screen p-6 sm:p-10 transition-all">
  <div className="max-w-4xl mx-auto space-y-10">


        {/* Main Image */}
        <img src={blog.image1} alt={blog.title} className="rounded-lg w-full h-64 object-cover" />

        {/* Title + Date */}
        <div>
          <p className="text-sm text-gray-400">
            {blog.date} / {blog.tags?.[0]}
          </p>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-300 mt-2 mb-4">{blog.title}</h1>
        </div>

        {/* Article / Short Description / Long Description */}
        <div className="space-y-4 text-gray-300">
          {blog.article && <p>{blog.article}</p>}
          {blog.short_description && <p>{blog.short_description}</p>}
          {blog.long_description && <p>{blog.long_description}</p>}
          {blog.description1 && <p>{blog.description1}</p>}
          {blog.description2 && <p>{blog.description2}</p>}
        </div>

        {/* Example */}
        {blog.example && (
          <div className="bg-gray-200 dark:bg-[#3a3a3a]  p-4 rounded-lg transition-all">

            <h3 className="font-semibold text-lg mb-2">Example:</h3>
            <p className="text-gray-800 dark:text-gray-300 ">{blog.example}</p>
          </div>
        )}

        {/* Second Image */}
        {blog.image2 && (
          <img src={blog.image2} alt="Example" className="rounded-md w-full object-cover" />
        )}

        {/* Points */}
        {blog.points?.length > 0 && (
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1">
            {blog.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        )}

        {/* Video */}
        {blog.video && (
          <div className="aspect-video w-full">
            <iframe
              className="w-full h-full rounded"
              src={blog.video}
              title="Video"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        )}
{/* More Blogs Section */}
<div className="mt-16">
  <h2 className="text-2xl font-bold mb-6">More Blogs</h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {blogs
      .filter(item => item.id !== blog.id)      // current blog ko remove karo
      .slice(0, 3)                               // sirf 3 blogs dikhane hai
      .map(item => (
        <Link
          key={item.id}
          to={`/blog/${item.id}`}
         className="bg-gray-200 dark:bg-[#3a3a3a] rounded-lg overflow-hidden hover:scale-[1.02] duration-300 transition-all"

        >
          <img
            src={item.image1}
            alt={item.title}
            className="h-40 w-full object-cover"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-400 text-sm mt-2">{item.short_description}</p>
          </div>
        </Link>
      ))}
  </div>
</div>

        {/* Back Button */}
        <Link to="/blog" className="inline-block text-blue-400 hover:underline mt-8">
          ← Back to Blogs
        </Link>
      </div>
    </div>
  );
}
