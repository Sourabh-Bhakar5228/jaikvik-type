import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import ArrowLeft from "../../components/arrows/ArrowLeft";
import ArrowRight from "../../components/arrows/ArrowRight";
import galleryImages from "../../configs/all-gallery-images";

const GalleryImages = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const isHoveringRef = useRef(false);

  const handleVideoHover = (value: boolean) => {
    isHoveringRef.current = value;
    if (swiperRef.current) {
      // Add slight delay to prevent race conditions
      setTimeout(() => {
        if (isHoveringRef.current) {
          swiperRef.current.autoplay.stop();
        } else {
          swiperRef.current.autoplay.start();
        }
      }, 50);
    }
  };

  return (
    <div className="overflow-hidden h-auto my-4 ">
      <div className="websiteHeading mb-4">
        <h2 className="uppercase text-gray-200 text-xl inline-block relative">
          <a href="#" className="flex font-bold items-center gap-1.5 ml-2">
            Banners
          </a>
        </h2>
      </div>
      <div className="w-full group relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            // Mobile-first approach
            320: {
              // Small smartphones
              slidesPerView: 1,
              spaceBetween: 8,
            },
            480: {
              // Larger smartphones
              slidesPerView: 1,
              spaceBetween: 8,
            },
            640: {
              // Small tablets
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              // Tablets
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              // Laptops
              slidesPerView: 2,
              spaceBetween: 12,
            },
            1280: {
              // Desktop
              slidesPerView: 2,
              spaceBetween: 12,
            },
            1536: {
              // Large screens
              slidesPerView: 2,
              spaceBetween: 15,
            },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          loop
          loopPreventsSliding={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true, // Added pause on hover
            waitForTransition: true,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          speed={500}
          className="mySwiper !overflow-visible"
        >
          {galleryImages.map((item, index) => (
            <SwiperSlide
              key={index}
              className="hover:z-50 transition-all duration-200"
            >
              <div
                className="hover:scale-105 transition-all duration-300 h-full object-cover hover:z-[1000] hover:shadow-lg rounded-lg overflow-hidden"
                onMouseEnter={() => handleVideoHover(true)}
                onMouseLeave={() => handleVideoHover(false)}
              >
                <img
                  src={item}
                  alt="image"
                  className="w-full h-full object-cover hover:brightness-105 transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <ArrowLeft
          onClick={() => {
            swiperRef.current?.slidePrev();
          }}
        />
        <ArrowRight
          onClick={() => {
            swiperRef.current?.slideNext();
          }}
        />
      </div>
      <div className="swiper-pagination top-3 text-right pr-5 -z-10"></div>
    </div>
  );
};

export default GalleryImages;
