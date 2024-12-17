import { Button } from "../ui/button";
import { FaInstagram } from "react-icons/fa";
import post1 from "../../assets/Posts/post1.png";
import post2 from "../../assets/Posts/post2.png";
import post3 from "../../assets/Posts/post3.png";
import post4 from "../../assets/Posts/post4.png";
import WebFont from 'webfontloader'
import {  useEffect } from 'react'
export default function PostsSection() {
      useEffect(() => {
        WebFont.load({
          google: {
            families: ['Yesteryear', 'cursive'],
          },
        })
      }, [])
  return (
    <div className="relative bg-gradient-to-t from-[#E7F9FD] to-transparent py-6 flex justify-center mt-12">
      <div className="w-[85%]  mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold mb-11">
            Check out <span className="text-black">@foodieland</span> on Instagram
          </h2>
          <p className="text-gray-500 mb-8 text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div
            className="bg-white rounded-lg overflow-hidden "
          >
            <img src={post1} alt="Post 1" className="w-full h-auto" />
            <div className="p-3">
              <p className="text-xs text-gray-700">
                The vegetables dishes need to have certain vitamin for those people
              </p>
            </div>
          </div>
          <div
            className="bg-white rounded-lg overflow-hidden "
          >
            <img src={post2} alt="Post 2" className="w-full h-auto" />
            <div className="p-3">
              <p className="text-xs text-gray-700">
                Sweet food can bring someone into happiness as long as they don’t eat to much
              </p>
            </div>
          </div>
          <div
            className="bg-white rounded-lg overflow-hidden "
          >
            <img src={post3} alt="Post 3" className="w-full h-auto" />
            <div className="p-3">
              <p className="text-xs text-gray-700">
                What are you doing before start cooking? prepare the tools or ingredients?
              </p>
            </div>
          </div>
          <div
            className="bg-white rounded-lg overflow-hidden "
          >
            <img src={post4} alt="Post 4" className="w-full h-auto" />
            <div className="p-3">
              <p className="text-xs text-gray-700">
                Steak never be wrong, it’s suitable for you who want romantic dinner
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-11">
          <Button variant="default" size="xl" className="bg-black text-white  text-lg hover:bg-gray-800"  style={{ fontFamily: 'Yesteryear' }}>
            Visit Our Instagram
            <FaInstagram className="text-2xl" />
          </Button>
        </div>
      </div>
    </div>
  );
}
