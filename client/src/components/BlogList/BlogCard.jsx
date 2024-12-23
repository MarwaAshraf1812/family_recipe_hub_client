import PropTypes from 'prop-types';
import { useNavigate  } from 'react-router-dom';
export default function BlogCard({ image, title, description, author, date, authorImage , id }) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/blog/blogDetail/${id}`);
  };
  return (
    <div  onClick={handleClick} className="flex flex-col md:flex-row gap-6 p-4 md:p-6 md:max-w-[57rem] w-full md:mx-auto mx-0 items-start rounded-lg  cursor-pointer">
      <img
        src={image}
        alt="Blog Thumbnail"
        className="w-full md:w-80 h-52 rounded-lg object-cover"
      />
      <div className="flex-1 space-y-4">
        <h2 className="md:text-xl text-lg font-bold text-black">{title}</h2>
        <div >
          <p className="text-sm text-gray-600 lg:mb-10">{description}</p>
          <div className="flex flex-col md:flex-row md:items-center gap-9 mt-4">
            <div className="flex items-center gap-4">
              <img
                src={authorImage}
                alt={author}
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="text-sm text-black font-semibold ">{author}</span>
            </div>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  authorImage: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired
};
