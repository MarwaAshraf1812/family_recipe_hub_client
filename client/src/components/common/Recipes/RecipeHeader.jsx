import { MdTimer } from 'react-icons/md'
import { ImSpoonKnife } from 'react-icons/im'
import PropTypes from 'prop-types'

const RecipeHeader = ({ recipe }) => {

  return (
    <div className="flex flex-wrap items-center gap-6 md:gap-12 mt-6 md:mt-0">
      <div className="flex items-center gap-4 border-b-2 md:border-r-2 lg:border-r-2 lg:border-b-0 md:border-b-0 md:pr-6 pb-4 md:pb-0 w-full md:w-auto">
        <img
          src={recipe.author_image}
          alt={recipe.author || 'Author'}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="text-left">
          <span className="block font-bold text-md">{recipe.author || 'Unknown Author'}</span>
          <p className="text-sm text-gray-500">{recipe.publiched || 'N/A'}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 border-b-2 md:border-r-2 lg:border-r-2 lg:border-b-0 md:border-b-0 md:pr-6 pb-4 md:pb-0 w-full md:w-auto">
        <MdTimer className="text-2xl text-gray-800" />
        <div>
          <p className="text-md font-medium">PREP TIME</p>
          <p className="text-gray-500 text-sm">{recipe.prep_time || 'N/A'}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 border-b-2 md:border-r-2 lg:border-r-2 lg:border-b-0 md:border-b-0 md:pr-6 pb-4 md:pb-0 w-full md:w-auto">
        <MdTimer className="text-2xl text-gray-800" />
        <div>
          <p className="text-md font-medium">COOK TIME</p>
          <p className="text-gray-500 text-sm">{recipe.cook_time || 'N/A'}</p>
        </div>
      </div>

      <div className="flex items-center gap-4 w-full md:w-auto">
        <ImSpoonKnife className="text-2xl text-gray-800" />
        <p className="font-medium text-lg">{recipe.type || 'N/A'}</p>
      </div>
      

    </div>
  )
}

RecipeHeader.propTypes = {
  recipe: PropTypes.shape({
    author_image: PropTypes.string,
    author: PropTypes.string,
    publiched: PropTypes.string,
    prep_time: PropTypes.string,
    cook_time: PropTypes.string,
    type: PropTypes.string,
  }).isRequired,
}

export default RecipeHeader
