import AuthForm from './Components/AuthForm';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Invalid email address').nonempty('Email is required'),
  password: z.string().min(6, 'Password must be at least 6 characters').nonempty('Password is required'),
});

export default function Login() {
  const handleLoginSubmit = (data, setErrors) => {
    const result = loginSchema.safeParse(data);

    if (result.success) {
      console.log('Login Successful:', data);
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
    <AuthForm
      title="Welcome Back"
      fields={[
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', icon: <FaEnvelope className="absolute right-3 text-gray-400 text-xl" /> },
        { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password', icon: <FaLock className="absolute right-3 text-gray-400 text-xl" /> },
      ]}
      buttonText="Login"
      onSubmit={handleLoginSubmit}
      isLogin={true}
    />
  );
}
