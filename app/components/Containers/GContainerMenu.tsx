'use client';

import { ReactNode } from "react";

export interface GContainerMenuProps {
  children: ReactNode
}

export function GContainerMenu({ children }: GContainerMenuProps) {
  return (
    <div className="bg-black flex gap-4 justify-between px-100 pt-10"    >
      {children}
    </div >
  );
}
