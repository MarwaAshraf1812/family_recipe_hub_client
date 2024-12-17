import ContactImage from "../../assets/contact.png";
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export default function Contact() {
  return (
    <div
      className="bg-blue-50 h-auto mb-24 mt-28 sm:h-96 rounded-3xl p-8 sm:p-10 text-start max-w-[90%] mx-auto relative overflow-hidden flex items-center justify-center"
      style={{ backgroundImage: `url(${ContactImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
    >
      <div className="text-center">
        <h2 className="text-2xl lg:text-4xl font-semibold mb-5 text-gray-900">
          Deliciousness to your inbox
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor<br />incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center">
          <Input
            type="email"
            placeholder="Your email address..."
            className="py-2 sm:py-3 px-4 sm:px-6 rounded-l-full  bg-whiteborder-none outline-none w-64 sm:w-72 text-gray-700"
          />
          <Button className="py-2 sm:py-3 px-6 bg-black text-white rounded-r-full hover:bg-gray-800 transition-all">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
}
