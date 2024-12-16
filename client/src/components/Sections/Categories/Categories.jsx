import { Link } from 'react-router-dom';
import CategoryItem from './CategoryItem';
import BreakFastImage from '../../../assets/categories/im6.png';
import VeganImage from '../../../assets/categories/im1.png';
import MeatImage from '../../../assets/categories/im2.png';
import DesertImage from '../../../assets/categories/im3.png';
import LunchImage from '../../../assets/categories/im4.png';
import ChocoImage from '../../../assets/categories/im5.png';

export default function Categories() {
  const categories = [
    { image: BreakFastImage, title: 'Breakfast', bgColor: 'bg-linear_black' },
    { image: VeganImage, title: 'Vegetables', bgColor: 'bg-linear_green' },
    { image: MeatImage, title: 'Meat', bgColor: 'bg-linear_red' },
    { image: DesertImage, title: 'Desert', bgColor: 'bg-linear_yellow' },
    { image: LunchImage, title: 'Lunch', bgColor: 'bg-linear_grey' },
    { image: ChocoImage, title: 'Chocolate', bgColor: 'bg-linear_black' },
  ];

  return (
    <div className="w-full h-full py-16 px-4 lg:px-11 md:px-11">
      <div className="flex justify-between items-center mb-10 md:mb-14 w-full">
        <h1 className="text-4xl font-bold text-black md:text-5xl">Categories</h1>
        <Link to="/categories" className="text-black hover:bg-main_color shadow-md bg-main_color p-4 rounded-lg font-semibold">
          View All Categories
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-full">
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
  );
}
