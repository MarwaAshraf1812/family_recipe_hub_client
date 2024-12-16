import Hero from '../components/Sections/Hero'
import ChefSection from '../components/Sections/ChefSection'
import PostsSection from '../components/Sections/PostsSection'
import LatestRecipes from '../components/Sections/LatestRecipes'
import Contact from '../components/Sections/Contact'
import Footer from '../layout/Footer/Footer'
export default function Landing() {
  return (
    <div>
      <Hero />
      <ChefSection />
      <PostsSection /> 
      <LatestRecipes />
      <Contact />
      <Footer />
    </div>
  )
}
