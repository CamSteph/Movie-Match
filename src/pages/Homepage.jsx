import React from 'react';
import CallToActionImage from '/src/assets/imgs/joker.jpg';

const Homepage = () => {

  const customStyles = {
    backgroundImage: `url(${CallToActionImage})`,

  }

  return (
    <div className="h-screen w-full bg-slate-900">
      <main className="w-full p-5 py-24 leading-loose min-h-[200px]">
        <h1 className="text-6xl text-left text-white">Personalized Movies</h1>
        <h3 className="text-xl text-left text-white">Find movies based on your personality</h3>
        <section className='h-56 w-full rounded-lg my-5 bg-no-repeat bg-cover bg-clip-content' style={customStyles}>
          <p className="text-white">Call to action goes here.</p>
        </section>
      </main>
    </div>
  );
};

export default Homepage;