import BlogCard from './BlogCard';
import BlogListData from './Data/BlogListData';
import { useSearch } from '../../context/SearchContext';

function BlogsList() {
  const { eSearch } = useSearch();

  const filteredBlogs = BlogListData.filter((blog) =>
    blog.name.toLowerCase().includes(eSearch.toLowerCase())
  );
  return (
    <div className="flex flex-col gap-6 p-5 max-w-[100%] lg:max-w-[1200px] ">
    {filteredBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            image={blog.image}
            title={blog.name}
            description={blog.description}
            author={blog.author}
            date={blog.date}
            authorImage={blog.authorImage}
          />
        ))}
    </div>
  );
}

export default BlogsList;
