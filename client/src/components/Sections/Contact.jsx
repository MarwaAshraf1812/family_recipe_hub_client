import ContactImage from '../../assets/contact.png'
import { Input } from '../ui/input'
import { Button } from '../ui/button'

export default function Contact() {
  return (
    <div
      className="bg-blue-50  h-auto mb-24 mt-28 sm:h-96 rounded-3xl p-8 sm:p-10 text-start max-w-[90%] mx-auto relative overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${ContactImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="text-center flex flex-col justify-center items-center">
        <h2 className="text-2xl lg:text-4xl font-semibold mb-5 text-gray-900">
          Deliciousness to your inbox
        </h2>
        <p className="text-sm sm:text-base text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
          <br />
          incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="relative w-full max-w-lg  mt-9">
          <Input
            type="text"
            placeholder="Your email address..."
            className="w-full bg-white pr-[6rem] rounded-2xl h-[4.5rem] pl-4 "
          />
          <Button className="absolute h-[3.5rem] md:w-36 rounded-2xl bg-black text-white right-2 top-1/2 transform -translate-y-1/2">
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  )
}
