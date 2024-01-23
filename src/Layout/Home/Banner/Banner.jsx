import { useState, useEffect, useCallback } from "react";
import "./Banner.css";
import images from "./images";
const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isFadingIn, setIsFadingIn] = useState(false);
  const getNextIndex = useCallback(
    (currentIndex) => (currentIndex + 1) % images.length,
    []
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => getNextIndex(prevIndex));
        setIsFadingOut(false);
        setIsFadingIn(true);
      }, 500);
    }, 7000);

    return () => clearInterval(intervalId);
  }, [getNextIndex]);

  useEffect(() => {
    if (isFadingIn) {
      const fadeTimeout = setTimeout(() => {
        setIsFadingIn(false);
      }, 1000);

      return () => clearTimeout(fadeTimeout);
    }
  }, [isFadingIn]);

//   const scrollOffset = 300;

//   const handleExploreClick = () => {
//     const windowHeight = window.innerHeight;
//     const targetPosition = windowHeight / 2 + scrollOffset;
//     window.scrollTo({ top: targetPosition, behavior: "smooth" });
//   };

  return (
    <div className="overflow-hidden flex justify-center items-center">
      <div className="carousel w-full object-cover">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item relative w-full flex justify-center items-center flex-1 overflow-hidden ${
              index === currentImageIndex ? "visible" : "hidden"
            }`}
          >
            <div
              className={`image-wrapper ${
                isFadingOut && index === currentImageIndex ? "fade-out" : ""
              } ${isFadingIn && index === currentImageIndex ? "fade-in" : ""}`}
            >
              <img
                src={image}
                className={`w-full object-cover md:h-full md:w-full h-96 opacity-70 dark:opacity-40 duration-300 ${
                  index === currentImageIndex ? "zoom-in" : ""
                }`}
                alt={`Image ${index}`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute flex justify-center lg:pt-12 ">
        <div className="flex flex-col items-center justify-center h-[88vh]">
          <h2 className="xl:text-6xl md:text-4xl text-3xl font-primary font-bold text-white text-center md:leading-[1.2] drop-shadow-lg shadow-black mb-5 lg:mb-7">
            Discover Your <span className="text-[#f7c221]">Dream </span>
            <br />
            <span>House</span>
            <br />
          </h2>
          <div className="w-full flex items-center justify-center">
            <div className="relative"></div>
            <div>
              <button
                className="text-sm flex items-center gap-2 md:text-base rounded py-3 px-5 text-slate-900 font-bold bg-[#f7c221fd] content-glow hover:bg-[#f7c2218f] hover:backdrop-blur-sm hover:border-[#f7c221] hover:border hover:duration-700 hover:text-white"
              >
                Explore More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
