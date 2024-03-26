import React, { useState } from 'react';
import { Image } from '@chakra-ui/react';

export default function SpinningLogo(props) {
  const { src } = props;
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(prevState => !prevState);
  };

  return (
    <div className="image-container">
      <Image
        src={src}
        alt="Multi Stacked"
        className={isSpinning ? 'spin' : ''}
        onClick={handleClick}
      />
    </div>
  );
}
