import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { MdTimer } from 'react-icons/md';
import { ImSpoonKnife } from 'react-icons/im';
import { RiVideoFill } from 'react-icons/ri';
import HomeImg1 from '../../assets/home1.png';
import HomeImg3 from '../../assets/home3.avif';
import HomeImg4 from '../../assets/home4.avif';
import HomeImg2 from '../../assets/home2.png';
import UserImg1 from '../../assets/user1.png';

const slideData = [
  {
    title: 'Spicy Delicious Chicken Wings',
    description: 'Indulge in the rich flavors of classic Italian pasta, crafted with authentic ingredients for a true taste of Italy',
    time: '30 Minutes',
    type: 'Chicken',
    author: {
      name: 'John Smith',
      date: '15 March 2022',
      image: UserImg1,
    },
    image: HomeImg1,
    badge: {
      text: 'Hot Recipes',
      image: HomeImg2,
    },
  },
  {
    title: 'Vegan Delight',
    description: 'A delicious vegan recipe packed with nutrients and flavor. Perfect for anyone looking to eat healthy!',
    time: '20 Minutes',
    type: 'Vegan',
    author: {
      name: 'Emily Brown',
      date: '20 April 2022',
      image: UserImg1,
    },
    image: HomeImg3,
    badge: {
      text: 'Healthy Choices',
      image: HomeImg2,
    },
  },
  {
    title: 'Classic Italian Pasta',
    description: 'Indulge in the rich flavors of classic Italian pasta, crafted with authentic ingredients for a true taste of Italy.',
    time: '45 Minutes',
    type: 'Pasta',
    author: {
      name: 'Sophia Rossi',
      date: '10 May 2022',
      image: UserImg1,
    },
    image: HomeImg4,
    badge: {
      text: 'Italian Cuisine',
      image: HomeImg2,
    },
  },
];

export default function Hero() {
  return (
    <div className="px-11 py-11 mx-auto">
      <Swiper
        modules={[Pagination, A11y, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        className="h-[700px]"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex h-full rounded-full px-28">

              <div className="w-1/2 h-full bg-main_color flex items-center p-5 relative group">
                <div className="flex flex-col">
                  <div
                    className="flex bg-white px-8 py-2 rounded-full items-center absolute top-6 left-6 
                    transform transition-transform duration-500 group-hover:scale-110"
                  >
                    <img
                      src={slide.badge.image}
                      alt={slide.badge.text}
                      className="mr-4 w-8 h-8 object-cover"
                    />
                    <p className="font-semibold text-sm">{slide.badge.text}</p>
                  </div>

                  <div className="flex flex-col">
                    <h1 className="text-7xl font-bold mb-10 group-hover:text-gray-900">
                      {slide.title}
                    </h1>
                    <p className="text-gray-700 mb-4">{slide.description}</p>
                  </div>

                  <div className="flex gap-4 items-center mb-6">
                    <div className="flex bg-slate-200 p-4 cursor-pointer rounded-full items-center hover:bg-slate-300 transition-colors duration-300">
                      <MdTimer className="mr-2 text-lg" />
                      <p className="text-sm font-medium">{slide.time}</p>
                    </div>
                    <div className="flex bg-slate-200 p-4 cursor-pointer rounded-full items-center hover:bg-slate-300 transition-colors duration-300">
                      <ImSpoonKnife className="mr-2 text-lg"/>
                      <p className="text-sm font-medium">{slide.type}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between absolute left-0 bottom-8 w-full p-5">
                    <div className="flex gap-3 items-center">
                      <img
                        src={slide.author.image}
                        alt={slide.author.name}
                        className="rounded-full w-12 h-12 object-cover hover:scale-105 transition-transform duration-300"
                      />
                      <div className="flex flex-col">
                        <h5 className="font-bold text-sm">{slide.author.name}</h5>
                        <p className="text-gray-500 text-xs">{slide.author.date}</p>
                      </div>
                    </div>
                    <button className="bg-black text-white px-9 py-5 rounded-3xl font-medium text-lg flex items-center hover:bg-black/80">
                      Recipes
                      <div className="rounded-3xl ml-4">
                        <RiVideoFill />
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-1/2 h-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
