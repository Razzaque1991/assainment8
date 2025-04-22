import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Cell
} from 'recharts';

const colors = ['#00C49F', '#FF8042', '#FFBB28', '#8884D8', '#FF6666', '#66CCFF', '#FF99CC'];

const CustomTrapezoidBar = ({ x, y, width, height, fill }) => {
  const topWidth = width * 0.1;
  const bottomWidth = width;
  const topX = x + (width - topWidth) / 2;

  return (
    <path
      d={`M${topX},${y} L${topX + topWidth},${y} L${x + bottomWidth},${y + height} L${x},${y + height} Z`}
      fill={fill}
    />
  );
};

const MyBook = () => {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const bookedData = localStorage.getItem('bookedLawyers');
    if (bookedData) {
      setBookings(JSON.parse(bookedData));
    }
  }, []);

  const handleCancel = (id) => {
    const updated = bookings.filter(b => b.id !== id);
    localStorage.setItem('bookedLawyers', JSON.stringify(updated));
    setBookings(updated);
    toast.warning('Appointment cancelled');
  };

  if (bookings.length === 0) {
    return (
      <div className='text-center my-10 space-y-4'>
        <h1 className="text-2xl font-semibold">You have no any booking appointment</h1>
        <button
          onClick={() => navigate('/')}
          className="btn btn-primary px-6 py-2 rounded-lg text-lg"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const chartData = bookings.map(b => ({
    name: b.name,
    fee: b.fee
  }));

  return (
    <div className="max-w-6xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg space-y-8">
      
      {/* Chart */}
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Fee Comparison Chart</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis domain={[0, 'dataMax + 1000']} />
            <Tooltip />
            <Bar dataKey="fee" shape={<CustomTrapezoidBar />}>
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Bookings Grid */}
      <div>
        <div className='text-center mt-10'>
          <h1 className='text-3xl font-semibold mb-3'>My Today Appointments</h1>
          <p className='textarea-xs mb-7'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
          {bookings.map((booking) => (
            <div key={booking.id} className="p-4 border rounded-xl shadow space-y-2 text-center">
              <div className='flex justify-around items-center'>
                <div>
                  <img
                    src={booking.image}
                    alt={booking.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">{booking.name}</h2>
                  <p>{booking.specialization}</p>
                  <p>Fee: Taka {booking.fee}</p>
                </div>
              </div>

              <button
                onClick={() => handleCancel(booking.id)}
                className="btn btn-error mt-2 px-6 py-3 text-lg rounded-2xl"
              >
                Cancel Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyBook;
