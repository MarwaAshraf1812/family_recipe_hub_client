import PropTypes from 'prop-types';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { BsClock } from 'react-icons/bs';
import { IoRestaurantOutline } from 'react-icons/io5'; 
import { useState } from 'react';

export default function RecipeCard({ title, image, time, category }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <div className=" p-3 relative bg-transparent max-w-xs">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div
          className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md cursor-pointer"
          onClick={toggleFavorite}
        >
          {isFavorite ? (
            <FaHeart className="text-red-500" size={18} />
          ) : (
            <FaRegHeart className="text-gray-400" size={18} />
          )}
        </div>
      </div>
      <h3 className="font-bold text-md mt-3 mb-2 text-left">{title}</h3>
      <div className="flex justify-start items-center text-gray-600 text-sm">
        <div className="flex items-center mr-4">
          <BsClock className="mr-1" size={14} />
          <span>{time}</span>
        </div>
        <div className="flex items-center">
          <IoRestaurantOutline className="mr-1" size={16} />
          <span>{category}</span>
        </div>
      </div>
    </div>
  );
}

RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  time: PropTypes.string,
  category: PropTypes.string,
};

RecipeCard.defaultProps = {
  time: '30 Minutes',
  category: 'Seafood',
};
