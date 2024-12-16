import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import WebFont from 'webfontloader';
import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Lobster', 'cursive'],
      },
    });
  }, []);

  return (
    <div className="bg-white max-w-[90%] text-gray-900 py-10 mt-16 mx-auto">
      <div className="max-w-[90%] mx-auto px-4 flex justify-between items-center flex-wrap">
        <div className="text-left w-full md:w-auto mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Lobster, cursive' }}>
          Family<span className='text-green-900'>Recipe</span>Hub
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          </p>
        </div>
        <div className="flex space-x-6 w-full md:w-auto justify-center md:justify-end lg:mb-0 mb-6 ">
          <Link to="/recipes" className="text-sm text-black hover:text-gray-700">
            Recipes
          </Link>
          <Link to="/blog" className="text-sm text-black hover:text-gray-700">
            Blog
          </Link>
          <Link to="/contact" className="text-sm text-black hover:text-gray-700">
            Contact
          </Link>
          <Link to="/about" className="text-sm text-black hover:text-gray-700">
            About us
          </Link>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-6">
        <div className="text-center">
          <p className="text-sm text-black font-bold">
            © 2020 Foodieland. Powered by <span className='text-orange-900'>Webflow</span>
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <FaFacebook size={20} className="text-black hover:text-gray-700" />
            <FaTwitter size={20} className="text-black hover:text-gray-700" />
            <FaInstagram size={20} className="text-black hover:text-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
}
