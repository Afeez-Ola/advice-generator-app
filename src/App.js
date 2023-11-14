import React from 'react';
import './App.css';
import patternDividerDesktop from './images/pattern-divider-desktop.svg';
import patternDividerMobile from './images/pattern-divider-mobile.svg';

import iconDice from './images/icon-dice.svg';

function App() {
 return (
  <div className='App container'>
   <div className='main py-6 px-9 max-w-lg'>
    <h6>Advice #117</h6>
    <p className='quote'>
     "This is a random quote, it'll be generated dynamiclly later, alright?
    </p>
    <picture>
     <source media='(max-width: 799px)' srcset={patternDividerMobile}></source>
     <img src={patternDividerDesktop} alt='pattern-divider image'></img>
    </picture>
    <button type='submit'>
     <img src={iconDice}></img>
    </button>
   </div>
  </div>
 );
}

export default App;
