import React, { useState } from 'react';

const Menu = () => {
  const [active, setActive] = useState(null);

  const menuItems = ['Home', 'My-Bookings', 'Blogs', 'Contact Us'];

  return (
    <div className="flex justify-center space-x-4">
      {menuItems.map((item, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`m-2 px-3 py-1 border-b-2 transition-all duration-300 ${
            active === index ? 'border-blue-500' : 'border-transparent'
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Menu;
