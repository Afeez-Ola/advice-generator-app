import React, { useState } from 'react';
import './App.css';
import Button from './components/button';
import Main from './components/main';

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
   <Main advice={advice} adviceID={adviceID}></Main>
   <Button fetchAdvice={fetchAdvice}></Button>

   <div class='attribution'>
    Challenge by{' '}
    <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
     Frontend Mentor
    </a>
    . Coded by <a href='#'>Afeez Bolaji</a>.
   </div>
  </div>
 );
}

export default App;
