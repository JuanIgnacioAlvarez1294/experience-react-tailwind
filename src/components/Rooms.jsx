import React from 'react';

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
        <p className='pt-4'>
        Step into a world of refined elegance with our fine interior rooms. Each space is meticulously designed to blend luxury and comfort seamlessly. From exquisite décor to modern amenities, immerse yourself in sophistication. Our rooms offer a sanctuary of tranquility, ensuring a restful stay amidst stylish surroundings. Experience unparalleled opulence and attention to detail in every corner. Elevate your stay and relish in the sumptuousness of our meticulously curated interior rooms, where luxury meets exceptional comfort.
        </p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
          alt='/'
        />
        <img
        className='row-span-2 object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          alt='/'
        />
        <img
        className='object-cover w-full h-full'
          src='https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
          alt='/'
        />
      </div>
    </div>
  );
};

export default Rooms;

/*import React from "react";

const Rooms = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[-35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">Fine Interior Rooms</h3>
        <p className="pt-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
          aspernatur, error numquam natus provident incidunt voluptas omnis ipsa
          deleniti blanditiis illum, dolorum accusantium veritatis corporis
          facere? Pariatur veniam beatae temporibus?
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img className="object-cover w-full h-full"
          src="https://images.freeimages.com/images/previews/974/roomz-3-1231967.jpg"
          alt="/"
        />
        <img className="row-span-2 object-cover w-full h-full"
          src="https://images.freeimages.com/images/previews/eae/roomz-5-1231926.jpg"
          alt="/"
        />
        <img className="object-cover w-full h-full"
          src="https://images.freeimages.com/images/previews/521/looking-out-the-window-1547910.jpg"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Rooms;
*/