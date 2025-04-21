import React, { useState } from 'react';

const Menu = () => {
  const [active, setActive] = useState(null);

  const menuItems = ['Home', 'My-Bookings', 'Blogs', 'Contact Us'];

  return (
    <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 p-4">
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`px-4 py-2 text-sm font-medium transition-all duration-300 border-b-2 ${
            active === index ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Menu;
