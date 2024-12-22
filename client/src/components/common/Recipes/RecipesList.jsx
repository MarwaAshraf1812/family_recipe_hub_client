import PropTypes from 'prop-types'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination'
import { Link } from 'react-router-dom'

function RecipesList({ recipes }) {
  return (
    <div className="flex flex-col justify-between mx-auto py-4">
      {recipes.map((category) => (
        <div key={category.category} className='mb-8'>
          <h2 className="text-2xl font-bold mb-4">{category.category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {category.recipes.map((recipe) => (
              <div
                key={recipe.id}
                className="flex items-center mb-4 p-2 rounded-md"
              >
                <img
                  src={recipe.images[0]}
                  alt={recipe.title}
                  className="lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 object-cover rounded-full"
                />
                <Link to={`/recipes/${recipe.id}`}>
                  <h3 className="text-md font-bold ms-8 hover:text-green-400 cursor-pointer transition duration-700 ease-in-out">
                    {recipe.title}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

RecipesList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
      recipes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          title: PropTypes.string.isRequired,
          images: PropTypes.arrayOf(PropTypes.string).isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
}

export default RecipesList
