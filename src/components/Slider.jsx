import React, { useEffect, useRef, useState } from "react";
import GlobalAPI from "../Services/GlobalAPI";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const imageUrl = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const elementRef = useRef();
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    trendingMovies();
  }, []);

  const trendingMovies = () => {
    GlobalAPI.getTrendingMovies().then((resp) => {
      console.log(resp.results);
      setMovieList(resp.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[155px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-hide scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((movie, i) => (
          <img
            key={i}
            src={imageUrl + movie.backdrop_path}
            className="min-w-full md:h-[310px] object-cover object-left-top mr-5 rounded-3xl hover:border-[4px] border-gray-400 duration-200 transition-all ease-in "
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
