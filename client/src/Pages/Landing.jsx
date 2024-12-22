import Hero from '../components/Sections/Hero'
import ChefSection from '../components/Sections/ChefSection'
import PostsSection from '../components/Sections/PostsSection'
import LatestRecipes from '../components/Sections/LatestRecipes'
import Contact from '../components/Sections/Contact'
import Categories from "../components/Sections/Categories/Categories";

export default function Landing() {
  return (
    <div>
      <Hero />
      <Categories />
      <ChefSection />
      <PostsSection /> 
      <LatestRecipes />
      <Contact />
    </div>
  )
}

