import React from "react";

const Plan = () => {
  return (
    <div className="max-w-[14000px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.freeimages.com/images/large-previews/3b2/prague-conference-center-1056491.jpg"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.freeimages.com/images/large-previews/dee/hotel-in-the-resort-town-of-santa-susana-in-catalonia-near-barcelona-spain-may-2006-1636277.jpg"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.freeimages.com/images/large-previews/443/german-architecture-1472494.jpg"
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.freeimages.com/images/large-previews/d8b/sea-view-from-hotel-1641395.jpg"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.freeimages.com/images/large-previews/fe2/maldives-unseen-beauty-1641933.jpg"
          alt="/"
        />
      </div>
      {/* Right side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-6">"Are you ready to explore new horizons?</p>
        <p className="pb-6">
          Embark on your next adventure with precision and ease. Our expert
          travel planners ensure a seamless journey, crafting personalized
          itineraries that cater to your desires. Let's map out your perfect
          getaway together!
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
