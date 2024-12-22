import PropTypes from 'prop-types';

const InstructionsList = ({ instructions }) => {
  return (
    <div className="w-full">
      {instructions.map((instruction, index) => (
        <div key={index} className="flex items-center gap-4 text-sm border-b-2 border-gray-300 py-4">
          <span className="text-black">{index + 1}.</span>
          <span className="text-black">{instruction}</span>
        </div>
      ))}
    </div>
  )
}

InstructionsList.propTypes = {
  instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default InstructionsList;

