import React from 'react';
import iconDice from '../images/icon-dice.svg';

function Button(props) {
 return (
  <button
   onClick={props.fetchAdvice}
   className='p-3 mt-0 rounded-full'
   type='submit'
  >
   <img src={iconDice}></img>
  </button>
 );
}
