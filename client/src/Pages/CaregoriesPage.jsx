import DynamicHeader from '../components/BlogList/DynamicHeader'
import CategoryList from '../components/common/CategoryList'
import Contact from '../components/Sections/Contact'

export default function CategoriesPage() {
  return (
    <>
    <div className="px-20 py-14 md:py-11 mx-auto ">
      <DynamicHeader
        title="Categories"
        description="Browse categories and find what you love."
        placeholder="Search categories or tags..."
      />
      <CategoryList />
    </div>
    <Contact />
    </>
  )
}
