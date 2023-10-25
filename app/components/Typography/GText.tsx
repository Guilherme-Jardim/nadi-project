import { Typography, TypographyProps } from '@mui/material';

interface GTextProps extends TypographyProps {
  text: string;
}

export function GText({ text, ...rest }: GTextProps) {
  return (
    <Typography className=' text-left text-2xl' {...rest}>
      {text}
    </Typography>


  );
}
