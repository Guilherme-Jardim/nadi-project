'use client';

export interface GButtonOrcaProps {
  textButton: string;
}



export function GButtonOrca({ textButton }: GButtonOrcaProps) {
  return (
    <button className="inline font-sans font-semibold text-white bg-teal-500 border-none rounded-md cursor-pointer max-w-165 min-w-95 w-165 hover:bg-teal-600">
      {textButton}
    </button>
  );
}
