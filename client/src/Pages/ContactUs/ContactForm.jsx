import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';

function ContactForm() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-4 md:py-8">
      <form>
        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="mb-6 w-full md:w-1/2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-2 p-2 md:p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6 w-full md:w-1/2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-2 p-2 md:p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:gap-5">
          <div className="mb-6 w-full md:w-1/2">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject
            </label>
            <Input
              type="text"
              id="subject"
              placeholder="Enter the subject"
              className="mt-2 p-2 md:p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6 w-full md:w-1/2">
            <label
              htmlFor="enquiry"
              className="block text-sm font-medium text-gray-700"
            >
              Enquiry type
            </label>
            <Input
              type="text"
              id="enquiry"
              placeholder="Advertising, Support, Feedback, etc."
              className="mt-2 p-2 md:p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Enter your message"
            className="mt-2 p-2 md:p-3 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="terms"
              className="rounded text-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I agree to the terms and privacy.
            </label>
          </div>
        </div>

        <div className="flex">
          <Button className="w-full md:w-auto px-4 md:px-6 py-2 md:py-3 text-white bg-black rounded-lg hover:bg-black/80">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;