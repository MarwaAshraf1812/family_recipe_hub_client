import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../context/Redux/recipesSlice";
import RecipeCard from "../common/Recipes/RecipeCard";
import DummyData from "./Data/DummyData";

export default function LatestRecipes() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  return (
    <div className="p-6 w-[90%] mx-auto mt-32 mb-12">
      <div className="flex items-center justify-between mb-16">
        <h2 className="lg:text-5xl md:text-3xl text-2xl font-extrabold flex-1">
          Try this delicious recipe<br></br> to make your day
        </h2>
        <p className="text-gray-500 flex-1 ">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim.
        </p>
      </div>
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

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
  );
}
