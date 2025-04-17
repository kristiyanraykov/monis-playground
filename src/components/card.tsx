import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import '../styles/animations.css';

const FlippCard = ({
  background,
  imgSrc,
  index,
  handleClick,
  isSmall = false,
  isFlipped = false,
  characterName,
  guessed = false
}: {
  background: string;
  imgSrc: string;
  isSmall: boolean;
  index: number;
  handleClick: (idx: number, characterName: string) => void;
  isFlipped: boolean;
  characterName: string;
  guessed: boolean;
}) => {
  // const [displayAnimation, setDisplayAnimation] = React.useState(true);

  // React.useEffect(() => {
  //   if (guessed && displayAnimation) {
  //     setTimeout(() => {
  //       setDisplayAnimation(false);
  //     }, 1000);
  //   }
  // }, [guessed, displayAnimation]);

  return (
    <div
      onClick={() => handleClick(index, characterName)}
      className={`relative ${isSmall ? 'w-20 h-20' : 'w-36 h-36'} flex items-center justify-center shadow-lg ${
        !isFlipped ? 'cursor-pointer' : ''
      } ${guessed ? 'animate-border-draw' : ''}`}
    >
      {/* {displayAnimation && guessed && <ParticlesContainer />} */}
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        style={{
          perspective: 1000,
          transformStyle: 'preserve-3d',
          position: 'relative',
          width: isSmall ? '80px' : '144px',
          height: isSmall ? '80px' : '144px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2
        }}
      >
        <div
          className='absolute backface-hidden rotate-y-180 w-full h-full rounded-lg flex items-center justify-center'
          style={{ backgroundColor: background }}
        >
          <Image width={100} height={100} src={imgSrc} alt='back' />
        </div>
        <div className='absolute backface-hidden rotate-y-0 w-full h-full rounded-lg flex items-center justify-center bg-gray-400'>
          <Image src={'/back2.png'} alt='back' width={100} height={100} priority />
        </div>
      </motion.div>
    </div>
  );
};
export default React.memo(FlippCard);

// style={{
//   position: "absolute",
//   backfaceVisibility: "hidden",
//   transform: "rotateY(0deg)",
//   background: "red",
// }}
//
// style={{
//   position: "absolute",
//   backfaceVisibility: "hidden",
//   transform: "rotateY(180deg)",
//   background: "green",
// }}
