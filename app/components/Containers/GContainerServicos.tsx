import { ReactNode, useEffect, useState } from "react";

export interface GContainerServicosProps {
  children: ReactNode;
}

export function GContainerServicos({ children }: GContainerServicosProps) {
  const [marginTop, setMarginTop] = useState(200);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMarginTop(0);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const containerStyle = {
    marginTop: marginTop,
    transition: "margin-top 2s cubic-bezier(0.645, 0.045, 0.355, 1)",
  };

  return (
    <div className="animated-container" style={containerStyle}>
      {children}
    </div>
  );
}
