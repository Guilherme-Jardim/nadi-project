'use client';

import fundoSvg from "@/public/fundo.svg";

export interface GContainerProps {
}

export function GContainer({ }: GContainerProps) {
  return (
    <div
      style={{
        background: "black",
        backgroundImage: `url(${fundoSvg})`,
        backgroundSize: "contain",
        height: 835,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }} >
    </div >
  );
}
