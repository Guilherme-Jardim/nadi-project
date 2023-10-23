'use client';

import { ReactNode } from "react";

export interface GContainerContentProps {
  children: ReactNode
}

export function GContainerContent({ children }: GContainerContentProps) {
  return (
    <div className="w-full vh-100 text-gray-500 font-inter-tight font-semibold text-3xl leading-58 flex flex-col items-center gap-20 text-center h-400">
      {children}
    </div >
  );
}
