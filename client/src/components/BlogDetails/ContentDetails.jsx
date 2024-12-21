import BlogListData from '../BlogList/Data/BlogListData';
import { useParams } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function ContentDetails() {
  const { id } = useParams();
  const blog = BlogListData.find((e) => e.id === parseInt(id));
  const { question1, question2, question3, question4, question5, answer1, answer2, answer3, answer4, answer5, Image } = blog;

  return (
    <div className="relative">
      <div className="absolute right-2 top-0 md:right-10 lg:right-[13rem] hidden lg:flex flex-col items-center space-y-4 md:space-y-9 p-4 ">
        <h2 className="text-sm font-semibold text-black ">SHARE THIS ON:</h2>
        <div className="text-black cursor-pointer">
          <FaFacebook size={24} />
        </div>
        <div className="text-black cursor-pointer">
          <FaTwitter size={24} />
        </div>
        <div className="text-black cursor-pointer">
          <FaInstagram size={24} />
        </div>
      </div>
      <div className="max-w-full lg:max-w-[62rem] mx-4 md:mx-10 lg:mx-32 mt-5 p-4 md:p-6 space-y-12 md:space-y-24">
        <div className="space-y-4 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{question1}</h2>
          <p className="text-gray-600">{answer1}</p>
        </div>
        <div className="space-y-4 w-full">
          <h2 className="text-2xl font-bold text-gray-800">{question2}</h2>
          <p className="text-gray-600">{answer2}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{question3}</h2>
          <img
            src={Image}
            alt="Cooking at home"
            className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] object-cover rounded-3xl shadow-lg"
          />
          <p className="text-gray-600">{answer3}</p>
        </div>
        <div className="space-y-4 w-full">
          <h2 className="text-2xl font-bold text-gray-800">{question4}</h2>
          <p className="text-gray-600">{answer4}</p>
        </div>
        <div className="bg-gradient-to-r from-gray-100 to-white space-y-2 p-6 w-full">
          <p className="text-4xl italic text-gray-700">
            La bonne nourriture est la base bonne
          </p>
          <p className="text-4xl italic text-gray-700">
            du véritable bonheur.
          </p>
        </div>
        <div className="space-y-4 w-full">
          <h2 className="text-2xl font-bold text-gray-800">{question5}</h2>
          <p className="text-gray-600">{answer5}</p>
        </div>
      </div>
    </div>
  );
}
