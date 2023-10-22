'use client';
import { Icon } from "@mui/material";
export interface GTitleProps {
  text: string;
}



export function GTitle({ text }: GTitleProps) {
  return (
    <div style={{ position: 'relative' }}>
      <h1 >
        {text}

      </h1>
      <Icon />
    </div>
  );
}
