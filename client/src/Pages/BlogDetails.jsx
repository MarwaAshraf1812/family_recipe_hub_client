import HeaderDetails from "../components/BlogDetails/HeaderDetails";
import Navbar from "../layout/Navbar/Navbar";
import ContentDetails from '../components/BlogDetails/ContentDetails';
import Contact from '../components/Sections/Contact';
import CheckOut from '../components/BlogDetails/CheckOut';
import Footer from '../layout/Footer/Footer';
export default function BlogDetails() {
  return (
    <div>
      <Navbar />
      <HeaderDetails />
      <ContentDetails />
      <Contact />
      <CheckOut />
      <Footer />  
    </div>
  )
}