import Contact from '../components/Sections/Contact'
import BlogsList from '../components/BlogList/BlogsList'
import TastyList from '../components/BlogList/TastyList'
import Forget from '../components/common/Forget'
import DynamicHeader from '../components/BlogList/DynamicHeader'

export default function BlogList() {
  return (
    <>
      <DynamicHeader
        title="Blog & Articles"
        description="Explore our latest blogs and insights."
        placeholder="Search articles, news, or posts..."
      />
      <div className="flex flex-col xl:flex-row gap-6 mt-6 px-4">
        <div className="flex-1">
          <BlogsList />
        </div>
        <div className="w-full xl:w-[30%] flex flex-col items-center gap-6">
          <TastyList />
          <div className="flex justify-center items-center w-full mr-4">
            <Forget />
          </div>
        </div>
      </div>
      <Contact />
    </>
  )
}
