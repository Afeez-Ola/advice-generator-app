import React, { useState } from 'react';
import './App.css';
import patternDividerDesktop from './images/pattern-divider-desktop.svg';
import patternDividerMobile from './images/pattern-divider-mobile.svg';

import iconDice from './images/icon-dice.svg';
import Picture from './components/picture';

function App() {
 const [advice, setadvice] = useState(
  'Remember that spiders are more afraid of you, than you are of them.',
 );
 const [adviceID, setadviceID] = useState(1);

 const fetchAdvice = () => {
  fetch('https://api.adviceslip.com/advice', {
   method: 'GET',
  })
   .then((response) => response.json())
   .then((data) => {
    setadvice(data.slip.advice);
    setadviceID(data.slip.id);
    console.log(data.slip);
   });
 };

 return (
  <div className='App container px-4'>
   <div className='main  w-2/5 max-[680px]:w-full rounded-xl py-10 px-13 max-w-lg mt-2'>
    <h6 className='font-extrabold text-sm'>Advice #{adviceID}</h6>
    <p className='quote px-3 font-extrabold'>"{advice}"</p>
    <Picture
     patternDividerMobile={patternDividerMobile}
     patternDividerDesktop={patternDividerDesktop}
    ></Picture>
   </div>
   <button
    onClick={fetchAdvice}
    className='p-3 mt-0 rounded-full'
    type='submit'
   >
    <img src={iconDice}></img>
   </button>
  </div>
 );
}

export default App;
