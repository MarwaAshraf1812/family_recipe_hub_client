import CategoryItem from '../../components/Sections/Categories/CategoryItem'
import categories from '../../DummyData/categories'
import Navbar from '../../layout/Navbar/Navbar'
import Footer from '../../layout/Footer/Footer'
export default function CategoriesPage() {
  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-5xl font-bold mb-24  mt-12 text-left">Categories</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              image={category.image}
              title={category.title}
              bgColor={category.bgColor}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
