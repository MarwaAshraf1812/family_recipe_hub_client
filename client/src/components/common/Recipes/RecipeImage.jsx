import PropTypes from 'prop-types';

const RecipeImage = ({ image, alt }) => {
  return (
    <img
      src={image}
      alt={alt}
      className="lg:w-full md:w-full w-[460px] h-[400px] md:h-[610px] object-cover rounded-3xl"
    />
  )
}
RecipeImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default RecipeImage;

