import { useNavigate, useParams } from 'react-router-dom'
import { recipes } from '../DummyData/Recipes'
import { useState } from 'react'
import ChefImage from '../assets/Chef.png'
import Contact from '../components/Sections/Contact'
import RecipeImage from '../components/common/Recipes/RecipeImage'
import NutritionInfo from '../components/common/Recipes/NutritionInfo'
import IngredientsList from '../components/common/Recipes/IngredientsList'
import InstructionsList from '../components/common/Recipes/InstructionsList'
import RecipeHeader from '../components/common/Recipes/RecipeHeader'
import { MdArrowBack } from 'react-icons/md'
import CheckOut from '../components/BlogDetails/CheckOut'

export default function RecipeDetails() {
  const { id } = useParams()
  const allRecipes = recipes.flatMap((category) => category.recipes)
  const recipe = allRecipes.find((recipe) => recipe.id === Number(id))
  const navigate = useNavigate()
  const [checkedIngredients, setCheckedIngredients] = useState([])

  if (!recipe) {
    return <div className="text-center py-20 text-2xl font-semibold">Recipe not found</div>
  }

  const handleIngredientToggle = (ingredient) => {
    setCheckedIngredients((prev) => {
      if (prev.includes(ingredient)) {
        return prev.filter((item) => item !== ingredient)
      } else {
        return [...prev, ingredient]
      }
    })
  }

  const handleBackClick = () => {
    navigate('/recipes')
  }

  return (
    <>
      <div className="py-6 mx-auto w-full px-10 lg:px-24">
        <div className="w-full lg:px-4">
          <div className="mb-12">
            <div
              className="cursor-pointer flex items-center gap-2 text-blue-500 mb-5"
              onClick={handleBackClick}
            >
              <MdArrowBack className="text-2xl" />
              <span className="font-medium">Back to Recipes</span>
            </div>
            <h1 className="text-4xl font-bold mb-8">{recipe.title}</h1>

            <RecipeHeader recipe={recipe} />
          </div>

          <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-8 md:col-span-12">
              <RecipeImage
                image={recipe.images[0]}
                alt={recipe.title}
              />
            </div>
            <NutritionInfo nutrition={recipe.nutrition} />

            <div className="col-span-12 text-center lg:text-left">
              <p className="text-gray-700 text-lg">{recipe.description}</p>
            </div>

            <div className="col-span-12 mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <IngredientsList
                  ingredients={recipe.ingredients}
                  checkedIngredients={checkedIngredients}
                  handleIngredientToggle={handleIngredientToggle}
                />
                <div className="w-full">
                  <img
                    src={ChefImage}
                    alt="Recipe Image"
                    className="h-96 object-cover mx-auto"
                  />
                </div>
              </div>
            </div>

            <div className="col-span-12 mt-12">
              <h2 className="font-bold text-2xl md:text-3xl mb-8">Instructions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <InstructionsList instructions={recipe.instructions} />
                <div className="w-full h-[300px]">
                  <img
                    src={recipe.images[1]}
                    alt={recipe.title}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
      <CheckOut />
    </>
  )
}
