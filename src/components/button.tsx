import React from 'react';

const Button = ({ onClick }) => {
  return (
    <div className='relative pt-24'>
      <button className='text-[17px] font-bold border-none cursor-pointer rounded-[0.75em] bg-mytheme-100' onClick={onClick}>
        <span className='block box-border border-2 border-mytheme-100 rounded-[0.75em] py-[0.75em] px-[1.5em] bg-white text-mytheme-100 font-text transform -translate-y-[0.2em] transition-transform duration-100 ease-in-out hover:-translate-y-[0.33em] active:translate-y-0'>
          Старт
        </span>
      </button>
    </div>
  );
};

export default Button;
