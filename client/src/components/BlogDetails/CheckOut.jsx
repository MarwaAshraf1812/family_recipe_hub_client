import DummyData from '../Sections/Data/DummyData'
import RecipeChard from '../common/Recipes/RecipeCard'

export default function CheckOut() {
  return (
    <div className='w-full flex flex-col justify-center items-center mt-32' >
      <div className='mb-16'>
        <h1 className='text-3xl font-bold'>Check out the delicious recipe</h1>
      </div>
      <div className=" w-[90%]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
        {DummyData.slice(0, 4).map((i) => (
          <RecipeChard
            key={i.id}
            title={i.name}
            image={i.image}
            time={i.time}
            category={i.category}
          />
        ))}
      </div>
    </div>
  )
}
