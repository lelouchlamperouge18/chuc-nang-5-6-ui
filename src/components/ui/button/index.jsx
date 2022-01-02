import React from 'react';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className='h-20 w-full bg-indigo-600 hover:bg-indigo-900 text-white text-4xl font-bold rounded-2xl'>
      {children}
    </button>
  );
};

export default Button;
