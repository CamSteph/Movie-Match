import React from 'react';
import JokerImage from '/src/assets/imgs/joker.jpg';
import Movie01Image from '/src/assets/imgs/movie01.jpg';
import CallToAction from '../components/CallToAction';

const Homepage = () => {

  return (
    <div className="h-full w-full bg-slate-900 p-5 py-24">
      <h1 className="text-6xl text-white text-center">Welcome to Movie Match.</h1>
      <h1 className="text-xl text-white text-center opacity-80 my-2">Choose an option below!</h1>
      <div className="grid grid-rows-2">
      <CallToAction 
        backgroundImage={Movie01Image}
        actionText="Search all movies..."
        endpoints={["/all-movies", "/about-us"]}
        />
      <CallToAction 
        backgroundImage={JokerImage}
        actionText="Personalize your findings..."
        endpoints={["/filter-movies", "/about-us"]}
      />
      </div>
    </div>
  );
};

export default Homepage;