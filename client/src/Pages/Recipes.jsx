import DynamicHeader from '../components/BlogList/DynamicHeader'
import RecipesList from '../components/common/Recipes/RecipesList'
import Contact from '../components/Sections/Contact'
import {recipes} from '../DummyData/Recipes'
import Footer from '../layout/Footer/Footer'


export default function Recipies() {
  return (
    <>

    <div className="px-20 py-14 md:py-11 mx-auto ">
      <DynamicHeader
        title="Recipes & Cuisine"
        description="Discover delicious recipes from around the world."
        placeholder="Search recipes or ingredients..."
        page="recipesPage"
      />
      <RecipesList
        recipes = {recipes}
      />
    </div>
    <Contact />
    <Footer />
    </>
  )
}
