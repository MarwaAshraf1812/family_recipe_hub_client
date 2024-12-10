import Auth2 from '../../assets/Auth2.jpg';
import { useState, useEffect } from 'react';
import WebFont from 'webfontloader';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

function Register() {
    useEffect(() => {
        WebFont.load({
        google: {
            families: ['Yesteryear', 'cursive'],
        },
        });
    }, []);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hover, setHover] = useState(false);

    const handleHover = () => {
        setHover(!hover);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
    };

    return (
        <section className='flex justify-center items-center'>
            <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>
            <img src={Auth2} alt="Auth2" className='w-full object-cover h-[100vh]' />
            <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] h-auto px-5 py-8 rounded-md bg-white z-50 shadow-lg'>
                <h2 className='text-[38px] font-bold mb-5 text-center'>
                    <span className='text-orange-500' style={{ fontFamily: 'Yesteryear' }}>R</span>egister
                </h2>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                    <div className='mb-4 relative'>
                        <label htmlFor="name" className="block mb-2 text-gray-600">Name:</label>
                        <div className="flex items-center relative">
                            <FaUser className="absolute left-3 text-gray-400" />
                            <input
                                type="text"
                                id="name"
                                placeholder='Enter Your Name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className='w-full pl-10 p-3 rounded-md border-2 focus:outline-none focus:border-orange-500 transition-all'
                            />
                        </div>
                    </div>
                    <div className='mb-4 relative'>
                        <label htmlFor="email" className="block mb-2 text-gray-600">Email:</label>
                        <div className="flex items-center relative">
                            <FaEnvelope className="absolute left-3 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                placeholder='Enter Your Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className='w-full pl-10 p-3 rounded-md border-2 focus:outline-none focus:border-orange-500 transition-all'
                            />
                        </div>
                    </div>
                    <div className='mb-4 relative'>
                        <label htmlFor="password" className="block mb-2 text-gray-600">Password:</label>
                        <div className="flex items-center relative">
                            <FaLock className="absolute left-3 text-gray-400" />
                            <input
                                type="password"
                                id="password"
                                placeholder='Enter Your Password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className='w-full pl-10 p-3 rounded-md border-2 focus:outline-none focus:border-orange-500 transition-all'
                            />
                        </div>
                    </div>
                    <div className='mb-6 relative'>
                        <label htmlFor="confirmPassword" className="block mb-2 text-gray-600">Confirm Password:</label>
                        <div className="flex items-center relative">
                            <FaLock className="absolute left-3 text-gray-400" />
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder='Confirm Your Password'
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                className='w-full pl-10 p-3 rounded-md border-2 focus:outline-none focus:border-orange-500 transition-all'
                            />
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <button
                            type="submit"
                            onMouseEnter={handleHover}
                            onMouseLeave={handleHover}
                            className='w-[55%] p-2 rounded-md text-white font-bold text-xl bg-orange-500 border-2 hover:border-orange-500 hover:text-orange-500 hover:bg-white transition-all duration-300 ease-in-out'
                        >
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Register;
