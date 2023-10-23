'use client';

import { ReactNode } from "react";

export interface GContainProps {
  children: ReactNode
}

export function GContainer({ children }: GContainProps) {
  return (
    <div className="bg-black bg-cover h-835 flex items-center justify-center">
      {children}
    </div >
  );
}
