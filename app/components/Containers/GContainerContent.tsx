'use client';

import { Fade } from "@mui/material";
import { ReactNode } from "react";

export interface GContainerContentProps {
  children: ReactNode
}

export function GContainerContent({ children }: GContainerContentProps) {
  return (
    <Fade in={true} timeout={1000} easing={Fade}>
      <div className="w-6/12 vh-100 text-gray-500 font-inter-tight font-semibold text-3xl leading-58 flex flex-col items-center gap-20 mt20 text-center h-400">
        {children}
      </div >
    </Fade>

  );
}
