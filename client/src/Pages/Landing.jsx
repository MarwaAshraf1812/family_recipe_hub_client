import Hero from '../components/Sections/Hero'
import ChefSection from '../components/Sections/ChefSection'
import LatestRecipes from '../components/Sections/LatestRecipes'
import Contact from '../components/Sections/Contact'
import Footer from '../layout/Footer/Footer'
import Categories from "../components/Sections/Categories/Categories";
import CuratedCollections from '../components/Collections/CuratedCollections'
export default function Landing() {
  return (
    <div>
      <Hero />
      <Categories />
      <ChefSection />
      <CuratedCollections/>
      <LatestRecipes />
      <Contact />
      <Footer />
    </div>
  )
}

