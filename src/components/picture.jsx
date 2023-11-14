import React from 'react';
import patternDividerDesktop from '../images/pattern-divider-desktop.svg';
import patternDividerMobile from '../images/pattern-divider-mobile.svg';

function Picture() {
 return (
  <picture className='mb-2'>
   <source media='(max-width: 799px)' srcset={patternDividerMobile}></source>
   <img src={patternDividerDesktop} alt='pattern-divider image'></img>
  </picture>
 );
}

export default Picture;
