import ChefImage from '../../assets/chef.png';
import tomato from '../../assets/tomato.png';
import lettuce from '../../assets/lettuce.png';
import onion from '../../assets/onion.png';
import meat from '../../assets/meat.png';
import { Button } from '../ui/button';

export default function ChefSection() {
  return (
    <div className="w-[85%] mx-auto mt-11 flex flex-col lg:flex-row items-center justify-between bg-white px-6 py-12 md:px-12 md:py-16">
      <div className="max-w-md text-center md:text-left lg:mb-0 mb-11">
        <h1 className="text-4xl md:text-5xl  font-bold text-gray-900 mb-4">
          Everyone can be a <br /> chef in their own kitchen
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.
        </p>
        <Button
          className="bg-black text-white border-white border-2 hover:bg-white hover:text-black hover:border-black"
          size="lg"
        >
          Learn More
        </Button>
      </div>
      <div className="relative mt-8 md:mt-0 md:ml-8 w-full md:w-auto">
        <img
          src={ChefImage}
          alt="Chef"
          className="w-full h-auto rounded-xl bg-gradient-to-t from-[#E7F9FD] to-transparent"
        />
        <div className="absolute top-0 left-4">
          <img src={lettuce} alt="Lettuce" className="w-16 h-16" />
        </div>
        <div className="absolute top-8 right-4">
          <img src={meat} alt="Meat" className="w-16 h-16" />
        </div>
        <div className="absolute bottom-4 right-12">
          <img src={onion} alt="Onion" className="w-14 h-14" />
        </div>
        <div className="absolute bottom-8 left-8">
          <img src={tomato} alt="Tomato" className="w-14 h-14" />
        </div>
      </div>
    </div>
  );
}
