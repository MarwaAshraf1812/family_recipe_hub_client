import { useState } from 'react'
import { Button } from '../../../components/ui/button'
import { Input } from '../../../components/ui/input'
import backgroundImage from '../../../assets/Auth2.jpg'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function AuthForm({ title, fields, onSubmit, buttonText, isLogin }) {
  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const [hover, setHover] = useState(false)

  const handleHover = () => setHover(!hover)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData, setErrors)
  }


  return (
    <section className="flex justify-center items-center">
      <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>
      <img
        src={backgroundImage}
        alt="Background"
        className="w-full object-cover h-[100vh]"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-auto px-8 py-10 rounded-md bg-white z-50 shadow-lg">
        <h2
          className="text-[2.8rem] font-bold mb-6 text-center"
        >
          <span className="text-green-800">{title.charAt(0)}</span>
          {title.slice(1)}
        </h2>

        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col"
        >
          {fields.map((field) => (
            <div
              key={field.name}
              className="mb-4 relative"
            >
              <div className="flex items-center relative">
                <Input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  required
                  className="w-full h-12 py-4 pl-3 pr-10 rounded-md border-2 focus:outline-none focus:border-green-800 transition-all text-lg"
                />
                {field.icon}
              </div>
              {errors[field.name] && (
                <p className="text-red-600 text-sm mt-1">{errors[field.name]}</p>
              )}
            </div>
          ))}
          
          {!isLogin && (
            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm">
                <Link
                  to="/login"
                  className="text-green-700 hover:text-green-500 transition-all duration-300 ease-in-out"
                >
                  I have an Account?
                </Link>
              </div>
            </div>
          )}
          {isLogin && (
            <div className="mt-4 flex justify-between items-center">
              <div className="text-sm">
                <Link
                  to="/forgetpassword"
                  className="text-green-700 hover:text-green-500 transition-all duration-300 ease-in-out"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="text-sm">
                <Link
                  to="/register"
                  className="text-green-700 hover:text-green-500 transition-all duration-300 ease-in-out"
                >
                  Create Account ?
                </Link>
              </div>
            </div>
          )}

          <div className="w-full flex justify-center items-center mt-6">
            <Button
              type="submit"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              className={`w-[65%] h-12 py-4 rounded-md text-white font-bold text-2xl bg-green-800 border-2 hover:bg-green-700 hover:border-green-700 hover:text-white transition-all duration-300 ease-in-out ${
                hover ? 'bg-green-700 text-white' : ''
              }`}
            >
              {buttonText}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

AuthForm.propTypes = {
  fields: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  isLogin: PropTypes.bool,
}

AuthForm.defaultProps = {
  isLogin: false,
}
