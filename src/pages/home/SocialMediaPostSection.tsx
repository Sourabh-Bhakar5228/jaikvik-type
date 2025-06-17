import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import ArrowLeft from "../../components/arrows/ArrowLeft";
import ArrowRight from "../../components/arrows/ArrowRight";
import posts from "../../configs/all-posts";

const SocialMediaPostSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handleVideoHover = (value: boolean) => {
    if (swiperRef.current) {
      value
        ? swiperRef.current.autoplay.stop()
        : swiperRef.current.autoplay.start();
    }
  };

  return (
    <div className="relative">
      <div className="mb-2">
        <h2 className="text-gray-200 text-xl font-bold uppercase">
          <a href="#" className="flex items-center gap-1.5">
            Social Media Posts
          </a>
        </h2>
      </div>

      <div className="relative group">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={4.5}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="!overflow-visible"
        >
          {posts.map((item, index) => (
            <SwiperSlide key={index} className="hover:z-50">
              <div
                className="hover:scale-125 transition-all duration-300 hover:z-50"
                onMouseEnter={() => handleVideoHover(true)}
                onMouseLeave={() => handleVideoHover(false)}
              >
                <img
                  src={item}
                  alt="Social media post"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <ArrowLeft
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <ArrowRight
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
    </div>
  );
};

export default SocialMediaPostSection;
