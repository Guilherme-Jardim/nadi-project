import React, { useState } from 'react';
import Image from 'next/image';
import { Typography, Button } from '@mui/material';

type Depoiment = {
  depoimenttext: string;
  depoimentalt: string;
  depoimentsrc: string;
};

type DepoimentsProps = {
  depoiments: Depoiment[];
};

export const GDepoiment = ({ depoiments }: DepoimentsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDepoiment = () => {
    setCurrentIndex((prevIndex) => (prevIndex === depoiments.length - 1 ? 0 : prevIndex + 1));
  };

  const prevDepoiment = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? depoiments.length - 1 : prevIndex - 1));
  };

  return (
    <div className="flex justify-between items-center w-fit">
      <Button onClick={prevDepoiment} variant="contained" color="primary">
        &#8249; Anterior
      </Button>
      <div className="flex flex-col items-center space-x-4 ">

        <Typography>{depoiments[currentIndex].depoimenttext}</Typography>
        <Image alt={depoiments[currentIndex].depoimentalt} src={depoiments[currentIndex].depoimentsrc} width={200} height={200} />
      </div>
      <Button onClick={nextDepoiment} variant="contained" color="primary">
        Próximo &#8250;
      </Button>
    </div>
  );
};
