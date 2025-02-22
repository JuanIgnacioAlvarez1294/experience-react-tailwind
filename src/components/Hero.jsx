import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[15%] max-w-[1100px] m-auto absolute pr-4">
          <p>All Inclusive</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            Private Beaches & Getaways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Escape to exclusive paradises with our all-inclusive packages,
            granting access to serene private beaches and luxurious getaways.
            Indulge in unparalleled comfort and privacy, basking in the beauty
            of pristine seclusion. Your ultimate retreat awaits!
          </p>
          <button
            className="bg-white text-black
            "
          >
            Reserve Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
