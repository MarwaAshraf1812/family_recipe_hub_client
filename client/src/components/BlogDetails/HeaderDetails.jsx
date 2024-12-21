import { useParams } from 'react-router-dom'
import BlogListData from '../BlogList/Data/BlogListData'

export default function HeaderDetails() {
    const { id } = useParams()
    const blog = BlogListData.find((e) => e.id === parseInt(id))
    const { name, authorImage, author, date, description, image } = blog
  
    return (
      <div className="p-6 w-[95%] mx-auto text-center mt-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-8">
          {name}
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 md:flex-row md:items-center md:gap-9 mb-8">
          <div className="flex items-center gap-4">
            <img
              src={authorImage}
              alt={author}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <span className="text-sm sm:text-base text-black font-semibold">{author}</span>
          </div>
          <span className="text-xs sm:text-sm text-gray-500">{date}</span>
        </div>
        <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto mb-6">
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
            {description}
          </p>
        </div>
        <img
          src={image}
          alt={name}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover rounded-3xl shadow-lg mx-auto"
        />
      </div>
    )
  }
  