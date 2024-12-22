import PropTypes from 'prop-types';

const NutritionInfo = ({ nutrition }) => {
  return (
    <div className="lg:col-span-4 md:col-span-12 col-span-12 bg-main_color p-6 md:p-8 rounded-3xl shadow-md">
      <h2 className="text-xl md:text-2xl font-bold mb-6">Nutrition Information</h2>
      <ul className="list-none space-y-4 mb-8">
        {Object.entries(nutrition).map(([key, value]) => (
          <li key={key} className="flex justify-between text-sm border-b-2 border-gray-300 py-2">
            <span className="font-semibold capitalize text-gray-700">{key.replace(/_/g, ' ')}:</span>
            <span className="border-b-2 font-semibold">{value}</span>
          </li>
        ))}
      </ul>
      <p className="text-center px-4 mt-28 text-gray-700">
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  )
}

NutritionInfo.propTypes = {
  nutrition: PropTypes.object.isRequired,
};

export default NutritionInfo
