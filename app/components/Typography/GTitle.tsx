import { Typography, TypographyProps } from '@mui/material';

interface GTitleProps extends TypographyProps {
  text: string;
}

export function GTitle({ text, ...rest }: GTitleProps) {
  return (
    <Typography className='font-bold' variant='h2' {...rest}>
      {text}
    </Typography>


  );
}
