import PropTypes from 'prop-types'

export default function TastyCard({ image, title, author }) {
  return (
    <div className="flex xl:flex-row flex-col items-center gap-6 mb-6  rounded-lg ">
      <img
        src={image}
        alt={title}
        className="xl:w-48 xl:h-36 w-full object-cover rounded-md"
      />
      <div>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">By {author}</p>
      </div>
    </div>
  )
}

TastyCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
}
