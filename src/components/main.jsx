import React from 'react';
import Advice from './advice';
import Picture from './picture';

function Main(props) {
 return (
  <div className='main  w-2/5 max-[680px]:w-full rounded-xl py-10 px-13 max-w-lg mt-2'>
   <h6 className='font-extrabold text-sm'>Advice #{props.adviceID}</h6>
   <Advice advice={props.advice}></Advice>
   <Picture></Picture>
  </div>
 );
}

export default Main;
