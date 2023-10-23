'use client';
export interface GButtonTextHoverProps {
  textButton: string;
}



export function GbuttonTextHover({ textButton }: GButtonTextHoverProps) {
  return (
    <button className="cursor-pointer bg-transparent border-none max-w-165 min-w-95 w-165">
      <p className="text-gray-400 hover:text-white">
        {textButton}
      </p>
    </button>
  );
}
