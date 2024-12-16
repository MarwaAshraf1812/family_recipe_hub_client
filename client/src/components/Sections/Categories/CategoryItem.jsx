import PropTypes from 'prop-types';

function CategoryItem({ image, title, bgColor }) {
  return (
    <div
      className={`w-36  rounded-xl mt-10 mx-auto p-4 flex flex-col items-center relative  ${bgColor} shadow-sm transition duration-500 hover:scale-110 cursor-pointer`}
    >
      <div className="w-20 relative">
        <img
          src={image}
          alt={title}
          className="w-28 h-24 object-cover mb-4 absolute -top-14 left-1/2 transform -translate-x-1/2 rounded-full"
        />
      </div>
      <h3 className="text-lg font-semibold text-center mt-16">{title}</h3>
    </div>
  );
}

CategoryItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default CategoryItem;
