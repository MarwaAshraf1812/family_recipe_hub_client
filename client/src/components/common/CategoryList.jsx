import CategoryItem from '../Sections/Categories/CategoryItem';
import categories from '../../DummyData/categories';
import { useSearch } from '../../context/SearchContext';

function CategoryList() {
  const { eSearch } = useSearch('categoriesPage');
  const filteredCategories = categories.filter((category) =>
    category.title.toLowerCase().includes(eSearch.toLowerCase()) 
  );

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {filteredCategories.map((category, index) => (
        <CategoryItem
          key={index}
          image={category.image}
          title={category.title}
          bgColor={category.bgColor}
        />
      ))}
    </div>
  );
}

export default CategoryList;
