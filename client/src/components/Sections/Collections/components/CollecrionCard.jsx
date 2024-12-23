import PropTypes from 'prop-types';

export default function RecipeCollectionCard({ title, image, recipesCount }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer ">
      <img src={image} alt={title} className="w-full h-56 object-cover" />
      <div className="p-4  text-left flex justify-between items-center">
        <div className="flex-1">
          <h2 className="md:text-2xl text-lg font-semibold text-gray-800">{title}</h2>
        </div>
        <div className="bg-white  mr-4 px-3 py-1 border border-black   text-sm text-black font-medium flex-shrink-0 min-w-[100px] text-center">
          {recipesCount} Recipes
        </div>
      </div>
    </div>
  );
}

RecipeCollectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  recipesCount: PropTypes.number.isRequired,
};
