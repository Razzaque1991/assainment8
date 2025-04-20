import React from 'react';

const Home = () => {
  return (
    <div
      className="h-[400px] md:h-[600px] bg-center bg-cover shadow-xl relative"
      style={{
        backgroundImage: "url('/img/banner.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
      <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white text-2xl md:text-4xl font-bold mb-4">
          It avoids subjective claims or <br />
          exaggeration that might raise red <br />
          flags legally
        </h1>
        <p className="text-white max-w-xl mb-3">
          Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.
          Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
        </p>
      </div>
    </div>
  );
};

export default Home;
