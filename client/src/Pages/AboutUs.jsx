
import TeamImage from '../assets/contactus.png'
import VisionImage from '../assets/about2.png'
import MissionImage from '../assets/about1.png'

function AboutUs() {
  return (
    <>
      <div className="p-8 w-[90%] mx-auto text-center mt-16">
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700">
            We are committed to empowering businesses and individuals with cutting-edge solutions.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <img src={VisionImage} alt="Vision" className="rounded-lg shadow-md w-full h-80 object-cover" />
          </div>
          <div className="text-left">
            <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
            <span className='font-semibold'> To inspire culinary creativity and bring people together by sharing authentic, delicious, and easy-to-follow recipes from around the world.</span>
            We believe that food is more than just sustenance . its a way to connect cultures, celebrate traditions, and bring joy to everyday life. Our vision is to create a global community of food lovers who can discover, cook, and share amazing recipes from all corners of the world.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
          <div className="order-2 md:order-1 text-left">
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
            <span className='font-semibold'>Empowering home cooks to create delicious meals by providing high-quality, well-tested recipes that are easy to follow and accessible to all.</span>
            We are dedicated to simplifying the cooking experience by offering detailed step-by-step instructions, vibrant visuals, and helpful tips. Our mission is to make cooking enjoyable and rewarding for beginners and seasoned chefs alike.</p>
          </div>
          <div className="order-1 md:order-2">
            <img src={MissionImage} alt="Mission" className="rounded-lg shadow-md w-full h-80 object-cover" />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="text-center">
              <img
                src={TeamImage}
                alt="Team Member"
                className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
              />
              <h3 className="text-xl font-medium mt-4">Sarah Johnson</h3>
              <p className="text-gray-500">Founder & Head Chef</p>
            </div>

            <div className="text-center">
              <img
                src={TeamImage}
                alt="Team Member"
                className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
              />
              <h3 className="text-xl font-medium mt-4">David Williams</h3>
              <p className="text-gray-500">Food Photographer & Content Creator</p>
            </div>

            <div className="text-center">
              <img
                src={TeamImage}
                alt="Team Member"
                className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
              />
              <h3 className="text-xl font-medium mt-4">Emily Roberts</h3>
              <p className="text-gray-500">Recipe Developer & Nutritionist</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutUs
