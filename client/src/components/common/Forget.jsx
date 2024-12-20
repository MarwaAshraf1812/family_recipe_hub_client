import background from '../../assets/Forget.png';
import Star from '../../assets/Star.png';
import  WebFont from 'webfontloader';
import { useEffect } from 'react';
export default function Forget() {
    useEffect(() => {
        WebFont.load({
          google: {
            families: ['Lobster', 'cursive'],
          },
        });
      }, []);
  return (
    <div
      className="flex flex-col  items-center bg-gradient-to-t from-[#357355] to-[#1D483B] from-indigo-500 justify-center w-full md:w-[88%] p-6 relative"
      style={{
        background: 'linear-gradient(135deg, #357355, #1D483B)',
      }}
    >
      <h1 className="text-white text-2xl text-center " style={{ fontFamily: 'Lobster, cursive' }}>
        Don&apos;t forget to eat <br /> healthy food
      </h1>
      <div className="relative flex w-full items-center justify-center">
        <img
          src={Star}
          alt="Star"
          className="absolute md:w-96 lg:w-72 max-[600px]:w-72  object-contain"
        />
        <img
          src={background}
          alt="Healthy Food"
          className="lg:w-72 md:w-96 max-[600px]:w-72 rounded-full object-cover relative z-10"
        />
      </div>
      <p className="text-white text-sm ">www.foodieland.com</p>
    </div>
  );
}
