import Contact from '../../components/Sections/Contact'
import ContactImage from '../../assets/contactus.png'
import ContactForm from './ContactForm'
import CheckOut from '../../components/BlogDetails/CheckOut';

function ContactUs() {
  return (
    <>
      <div className="p-4 md:p-6 lg:px-28 w-full lg:w-[95%] mx-auto mt-8 md:mt-16">
        <h1 className="text-3xl lg:text-5xl font-bold text-center mb-8">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-3 hidden md:flex md:w-96 justify-center items-center mx-auto">
            <div className="flex justify-center items-center h-full">
              <img
                src={ContactImage}
                alt="Contact"
                className="w-full max-w-sm object-cover"
              />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-9 p-2 md:p-4">
            <ContactForm />
          </div>
        </div>
      </div>
      <Contact />
      <CheckOut />
    </>
  );
}

export default ContactUs;