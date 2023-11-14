import React from 'react';

function Picture(props) {
 return (
  <picture className='mb-2'>
   <source
    media='(max-width: 799px)'
    srcset={props.patternDividerMobile}
   ></source>
   <img src={props.patternDividerDesktop} alt='pattern-divider image'></img>
  </picture>
 );
}

export default Picture;
