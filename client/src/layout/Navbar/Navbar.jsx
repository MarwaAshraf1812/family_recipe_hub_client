import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
import { useState } from 'react';
import { TbMenuDeep } from 'react-icons/tb'
import { IoMdClose } from 'react-icons/io'

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className='border-b border-gray-300'>
      <div className="container mx-auto py-5 px-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center text-2xl font-lobster text-gray-800">
            Family <span className="text-green-600">Recipe</span> Hub
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav>
              <ul className="flex items-center space-x-6 text-black font-medium">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600"
                        : "hover:text-green-600 transition-colors duration-200"
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/recipes"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600"
                        : "hover:text-green-600 transition-colors duration-200"
                    }
                  >
                    Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600"
                        : "hover:text-green-600 transition-colors duration-200"
                    }
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600"
                        : "hover:text-green-600 transition-colors duration-200"
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600"
                        : "hover:text-green-600 transition-colors duration-200"
                    }
                  >
                    About Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <FaFacebookF size={18} className="text-black hover:text-green-600 transition duration-200 cursor-pointer"/>
            <FaTwitter size={18} className="text-black hover:text-green-600 transition duration-200 cursor-pointer"/>
            <FaInstagram size={18} className="text-black hover:text-green-600 transition duration-200 cursor-pointer"/>
          </div>

          <div className="md:hidden flex items-center">
            {toggle ? (
              <IoMdClose
                size={28}
                className="cursor-pointer text-black hover:text-green-600 transition duration-200"
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <TbMenuDeep
                size={28}
                className="cursor-pointer text-black hover:text-green-600 transition duration-200"
                onClick={() => setToggle(!toggle)}
              />
            )}
          </div>
        </div>

        {toggle && (
          <div className="md:hidden absolute  left-0 w-full bg-white p-4 z-50 shadow-lg">
            <nav>
              <ul className="flex flex-col items-start space-y-4 text-black font-medium">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600"
                        : "hover:text-green-600 transition-colors duration-200"
                    }
                    onClick={() => setToggle(false)}
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/recipes"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600"
                        : "hover:text-green-600 transition-colors duration-200"
                    }
                    onClick={() => setToggle(false)}
                  >
                    Recipes
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/blog"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600"
                        : "hover:text-green-600 transition-colors duration-200"
                    }
                    onClick={() => setToggle(false)}
                  >
                    Blog
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600"
                        : "hover:text-green-600 transition-colors duration-200"
                    }
                    onClick={() => setToggle(false)}
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive
                        ? "text-green-600"
                        : "hover:text-green-600 transition-colors duration-200"
                    }
                    onClick={() => setToggle(false)}
                  >
                    About Us
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
