import React from 'react';
import { useNavigate } from 'react-router';

const CallToAction = ({
  backgroundImage,
  actionText,
  endpoints,
}) => {

  const navigate = useNavigate();

  const customStyles = {
    backgroundImage: `url(${backgroundImage})`,
  };

  const goToPage = (endpoint) => {
    navigate(endpoint);
  };

  return (
    <main className="relative w-full h-full p-2">
        <section className='relative h-60 w-full rounded-lg my-5 bg-no-repeat bg-cover bg-center grid grid-cols-2 place-items-center' style={customStyles}>
          <div className="bg-black absolute top-0 left-0 w-full h-full opacity-50 rounded-lg"></div>
          <h3 className="text-4xl text-left text-white ml-4 z-10 underline">{actionText}</h3>
          <div className="w-full flex items-center justify-evenly z-10">
            <button className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-white hover:text-sky-500 duration-300" onClick={() => goToPage(endpoints[0])}>Go</button>
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black duration-300" onClick={() => goToPage(endpoints[1])}>Learn More</button>
          </div>
        </section>
      </main>
  );
};

export default CallToAction;