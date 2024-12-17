import AuthForm from './Components/AuthForm';
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';
import Auth2 from '../../assets/Auth2.jpg';
import { z } from 'zod';

const registerSchema = z
  .object({
    name: z.string().nonempty('Name is required'),
    email: z.string().email('Invalid email address').nonempty('Email is required'),
    password: z.string().min(6, 'Password must be at least 6 characters').nonempty('Password is required'),
    confirmPassword: z.string().nonempty('Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export default function Register() {
  const handleRegisterSubmit = (data, setErrors) => {
    const result = registerSchema.safeParse(data);

    if (result.success) {
      console.log('Registration Successful:', data);
      setErrors({});
    } else {
      const errorMessages = result.error.format();
      setErrors({
        name: errorMessages.name?._errors[0],
        email: errorMessages.email?._errors[0],
        password: errorMessages.password?._errors[0],
        confirmPassword: errorMessages.confirmPassword?._errors[0],
      });
    }
  };

  return (
    <AuthForm
      title="Register"
      fields={[
        {
          name: 'name',
          label: 'Name',
          type: 'text',
          placeholder: 'Enter your name',
          icon: <FaUser className="absolute right-3 text-gray-400 text-xl" />,
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'Enter your email',
          icon: <FaEnvelope className="absolute right-3 text-gray-400 text-xl" />,
        },
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
          icon: <FaLock className="absolute right-3 text-gray-400 text-xl" />,
        },
        {
          name: 'confirmPassword',
          label: 'Confirm Password',
          type: 'password',
          placeholder: 'Confirm your password',
          icon: <FaLock className="absolute right-3 text-gray-400 text-xl" />,
        },
      ]}
      buttonText="Register"
      onSubmit={handleRegisterSubmit}
      backgroundImage={Auth2}
    />
  );
}
