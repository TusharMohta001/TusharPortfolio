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
    <div className="bg-[#2e2e2e] text-white min-h-screen p-6 sm:p-10">
      <div className="max-w-4xl mx-auto space-y-10">
        <img src={blog.image1} alt={blog.title} className="rounded-lg w-full h-64 object-cover" />
        <div>
          <p className="text-sm text-gray-400">{blog.date} / {blog.tags?.[0]}</p>
          <h1 className="text-3xl font-bold mt-2 mb-4">{blog.title}</h1>
        </div>
        <div className="space-y-4 text-gray-300">
          <p>{blog.long_description}</p>
          <p>{blog.description1}</p>
          <p>{blog.description2}</p>
        </div>
        {blog.image2 && <img src={blog.image2} alt="Example" className="rounded-md w-full object-cover" />}
        {blog.points?.length > 0 && (
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {blog.points.map((point, idx) => <li key={idx}>{point}</li>)}
          </ul>
        )}
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
        <Link to="/blog" className="inline-block text-blue-400 hover:underline mt-8">← Back to Blogs</Link>
      </div>
    </div>
  );
}
