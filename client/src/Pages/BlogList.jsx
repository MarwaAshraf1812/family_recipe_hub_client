import Navbar from '../layout/Navbar/Navbar';
import Footer from '../layout/Footer/Footer';
import Contact from '../components/Sections/Contact';
import BlogHeader from "../components/BlogList/BlogHeader";
import BlogsList from "../components/BlogList/BlogsList";
import TastyList from '../components/BlogList/TastyList';
import Forget from '../components/common/Forget';

export default function BlogList() {
  return (
    <>
      <Navbar />
      <BlogHeader />
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
      <Footer />
    </>
  );
}
