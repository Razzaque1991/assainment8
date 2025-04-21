import React, { useEffect, useState } from 'react';

const StatBox = ({ title, target, img }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 30);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCount(target);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(counter);
  }, [target]);

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 text-center w-64">
      <img src={img} alt={title} className="w-12 h-12 mx-auto mb-3" />
      <h2 className="text-4xl font-bold text-blue-600">{count}+</h2>
      <p className="text-gray-600 mt-2">{title}</p>
    </div>
  );
};

const Stats = () => {
  const statsData = [
    {
      title: 'Total Lawyer',
      target: 199,
      img: 'https://cdn-icons-png.flaticon.com/512/4320/4320337.png',
    },
    {
      title: 'Total Reviews',
      target: 467,
      img: 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png',
    },
    {
      title: 'Cases Initiated',
      target: 1900,
      img: 'https://cdn-icons-png.flaticon.com/512/1008/1008997.png',
    },
    {
      title: 'Total Stuffs',
      target: 300,
      img: 'https://cdn-icons-png.flaticon.com/512/2206/2206368.png',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 py-10 bg-gray-100">
      {statsData.map((stat, index) => (
        <StatBox
          key={index}
          title={stat.title}
          target={stat.target}
          img={stat.img}
        />
      ))}
    </div>
  );
};

export default Stats;
