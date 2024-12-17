import { useState, useEffect } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { z } from 'zod';
import WebFont from 'webfontloader';
import Auth2 from '../../assets/Auth2.jpg';

const loginZod = z.object({
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters').nonempty('Password is required'),
});

function Login() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Yesteryear', 'cursive'],
      },
    });
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  const validateField = (field, value) => {
    const result = loginZod.safeParse({ email, password, [field]: value });

    if (result.success) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: '',
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = loginZod.safeParse({ email, password });

    if (result.success) {
      console.log('Form submitted successfully:', { email, password });
      setErrors({});
    } else {
      const errorMessages = result.error.format();
      setErrors({
        email: errorMessages.email?._errors[0],
        password: errorMessages.password?._errors[0],
      });
    }
  };

  return (
    <section className="flex justify-center items-center ">
      <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>
      <img src={Auth2} alt="Auth2" className="w-full object-cover h-[100vh]" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[500px] px-8 py-10 rounded-md bg-white z-50 shadow-lg">
        <h2 className="text-[2.8rem] font-bold mb-9 text-center mt-9" style={{ fontFamily: 'Yesteryear' }}>
          <span className="text-green-800 ">W</span>elcome Back
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6 relative">
            <label htmlFor="email" className="block mb-2 text-gray-600">Email:</label>
            <div className="flex items-center relative">
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateField('email', e.target.value);
                }}
                placeholder="Enter your email"
                required
                className="w-full h-12 py-4 pl-3 pr-10 rounded-md border-2 focus:outline-none focus:border-green-800 transition-all text-lg"
              />
              <FaEnvelope className="absolute right-3 text-gray-400 text-xl" />
            </div>
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-6 relative">
            <label htmlFor="password" className="block mb-2 text-gray-600">Password:</label>
            <div className="flex items-center relative">
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validateField('password', e.target.value);
                }}
                placeholder="Enter your password"
                required
                className="w-full h-12 py-4 pl-3 pr-10 rounded-md border-2 focus:outline-none focus:border-green-800 transition-all text-lg"
              />
              <FaLock className="absolute right-3 text-gray-400 text-xl" />
            </div>
            {errors.password && <p className="text-red-600 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="w-full flex justify-center items-center mt-6">
            <Button
              type="submit"
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
              className={`w-[65%] h-12 py-4 rounded-md text-white font-bold text-2xl bg-green-800 border-2 hover:border-green-800 hover:text-green-800 hover:bg-white transition-all duration-300 ease-in-out ${
                hover ? 'bg-white text-green-800 border-green-800' : ''
              }`}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
