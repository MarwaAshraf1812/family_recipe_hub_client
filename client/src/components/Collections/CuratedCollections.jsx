import CollectionCard from './components/CollectionCard';
import Bagel from '../../assets/Collections/Bagel.jpg'
import Sushi from '../../assets/Collections/Sushi1.jpg'
import Donut from '../../assets/Collections/Donuts.jpg'
import Cookie from '../../assets/Collections/Cookies.jpg'
import Desserts from '../../assets/Collections/Desserts.jpg'
import Dinner from '../../assets/Collections/Dinner.jpg'
export default function CuratedCollections() {
  const collections = [
    {
      title: 'Sushi Combos for Your Next Party',
      image: Sushi,
      recipesCount: 150,
    },
    {
      title: 'Everything Bagel',
      image: Bagel,
      recipesCount: 170,
    },
    {
      title: 'Cook Like a Chef',
      image: Desserts,
      recipesCount: 200,
    },
    {
      title: 'Exquisite Dinner Recipe Ideas',
      image: Dinner,
      recipesCount: 130,
    },
    {
      title: 'The Ultimate Cookie Frenzy',
      image: Cookie,
      recipesCount: 140,
    },
    {
      title: 'For the Love of Donuts',
      image: Donut,
      recipesCount: 151,
    },
  ];
  return (
    <div className=" w-[87%]  mx-auto px-6 py-8 mt-9">
      <h1 className="md:text-4xl text-[1.5rem] font-bold text-center mb-12">Hand-Picked Collections</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.map((collection, index) => (
          <CollectionCard
            key={index}
            title={collection.title}
            image={collection.image}
            recipesCount={collection.recipesCount}
          />
        ))}
      </div>
    </div>
  );
}
