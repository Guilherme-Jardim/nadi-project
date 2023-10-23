import { Typography, TypographyProps } from '@mui/material';
import Image from 'next/image';

interface GTitleProps extends TypographyProps {
  text: string;
}

export function GTitle({ text, ...rest }: GTitleProps) {
  return (
    <Typography variant='h2' {...rest}>
      {text}
      <Image alt='teste' src="./moji.svg" width={0} height={0} style={{ width: 'auto', height: '45px' }} />
    </Typography>
  );
}
