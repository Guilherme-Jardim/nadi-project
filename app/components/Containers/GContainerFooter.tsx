'use client';

import { ReactNode } from "react";
import { GText } from "../Typography/GText";

export interface GContainerFooterProps {
}

export function GContainerFooter({ }: GContainerFooterProps) {
  return (
    <div className="flex justify-center bg-black pt-28">
      <div className="bg-black w-9/12  flex gap-4 justify-between text-white">
        <button>
          <GText className="text-2xl" text="Instagram" />
        </button>
        <button>
          <GText className="text-2xl" text="Behance" />
        </button>
        <button>
          <GText className="text-2xl" text="WhatsApp" />
        </button>
        <button>
          <GText className="text-2xl" text="2023. Caxias do Sul – Brasil" />
        </button>
      </div >
    </div >
  );
}