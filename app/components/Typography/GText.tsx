'use client';
export interface GTextProps {
  text: string;
}

export function GText({ text }: GTextProps) {
  return (
    <p>
      {text}
    </p>
  );
}
