import React from 'react';
import './App.css';
import patternDividerDesktop from './images/pattern-divider-desktop.svg';
import patternDividerMobile from './images/pattern-divider-mobile.svg';

import iconDice from './images/icon-dice.svg';

function App() {
 return (
  <div className='App container px-4'>
   <div className='main  w-2/5 max-[680px]:w-full rounded-xl py-10 px-13 max-w-lg mt-2'>
    <h6>Advice #117</h6>
    <p className='quote px-3 font-extrabold'>
     "This is a random quote, it'll be generated dynamiclly later, alright?
    </p>
    <picture className='mb-2'>
     <source media='(max-width: 799px)' srcset={patternDividerMobile}></source>
     <img src={patternDividerDesktop} alt='pattern-divider image'></img>
    </picture>
   </div>
   <button className='p-3 mt-0 rounded-full' type='submit'>
    <img src={iconDice}></img>
   </button>
  </div>
 );
}

export default App;
