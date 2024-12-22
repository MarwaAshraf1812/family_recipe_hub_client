import PropTypes from 'prop-types';

const IngredientsList = ({ ingredients, checkedIngredients, handleIngredientToggle }) => {
  return (
    <div className="w-full lg:w-2/3">
      <h2 className="font-bold text-2xl md:text-3xl mb-8">Ingredients</h2>
      {ingredients.map((ingredient, index) => (
        <div key={index} className="flex items-center gap-4 text-sm border-b-2 border-gray-300 py-4 cursor-pointer">
          <input
            type="checkbox"
            checked={checkedIngredients.includes(ingredient)}
            onChange={() => handleIngredientToggle(ingredient)}
            className="w-4 h-4 rounded-full cursor-pointer"
          />
          <span className={`text-black ${checkedIngredients.includes(ingredient) ? 'text-gray-500' : ''}`}>
            {ingredient}
          </span>
        </div>
      ))}
    </div>
  )
}

IngredientsList.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  checkedIngredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleIngredientToggle: PropTypes.func.isRequired,
};

export default IngredientsList;
