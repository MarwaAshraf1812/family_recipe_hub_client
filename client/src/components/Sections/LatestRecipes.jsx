import RecipeCard from '../common/Recipes/RecipeCard'
import DummyData from './Data/DummyData'

export default function LatestRecipes() {
  return (
    <div className="p-6 w-[90%] mx-auto mt-32 mb-12">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-16">
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-extrabold flex-1 mb-4 md:mb-0 text-center md:text-left">
          Try this delicious recipe<br></br> to make your day
        </h2>
        <p className="text-gray-500 flex-1 text-center md:text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua enim ad minim.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DummyData.slice(0, 8).map((recipe) => (
          <RecipeCard
            key={recipe.id}
            title={recipe.name}
            image={recipe.image}
            time={recipe.time}
            category={recipe.category}
          />
        ))}
      </div>
    </div>
  )
}
