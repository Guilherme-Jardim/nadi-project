import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Typography, IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

type Depoiment = {
  depoimenttext: string;
  depoimentalt: string;
  depoimentsrc: string;
};

type DepoimentsProps = {
  depoiments: Depoiment[];
};

export const GDepoiment = ({ depoiments, currentIndex }: DepoimentsProps & { currentIndex: number }) => {
  const [currentIndexState, setCurrentIndex] = useState<number>(currentIndex || 0);
  const [isPaused, setPaused] = useState(false);

  const nextDepoiment = () => {
    setCurrentIndex((prevIndex) => (prevIndex === depoiments.length - 1 ? 0 : prevIndex + 1));
  };

  const prevDepoiment = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? depoiments.length - 1 : prevIndex - 1));
  };

  const autoNextDepoiment = () => {
    if (!isPaused) {
      nextDepoiment();
    }
  };


  const handleMouseEnter = () => {
    setPaused(true);
  };

  const handleMouseLeave = () => {
    setPaused(false);
  };

  useEffect(() => {
    const interval = setInterval(autoNextDepoiment, 3000);
    return () => clearInterval(interval);
  }, [autoNextDepoiment, currentIndexState, isPaused]);

  return (
    <div className=" bg-black h-auto pt-20 flex justify-center items-center" >
      <div className="bg-black flex columns-3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <IconButton
          className=' self-start p-5'
          onClick={prevDepoiment}
          color="default"
          sx={{
            display: 'flex',
            color: 'white',
            '&:hover': {
              color: 'gray',
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <div className="flex flex-col items-center space-x-4" style={{ maxWidth: '550px', alignItems: 'flex-start' }}>
          <Typography className="text-white text-center" style={{ wordWrap: 'break-word', maxWidth: '100%' }}>{depoiments[currentIndexState].depoimenttext}</Typography>
          <Image
            style={{ alignSelf: 'center' }}
            alt={depoiments[currentIndexState].depoimentalt}
            src={depoiments[currentIndexState].depoimentsrc}
            width={0}
            height={0}
            className="w-24 rounded-full h-24"
            quality={100}
            sizes="100vw"
          />
        </div>
        <IconButton
          className=' self-start p-5'
          onClick={nextDepoiment}
          color="default"
          sx={{
            color: 'white',
            '&:hover': {
              color: 'gray',
            },
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div>



  );
};
