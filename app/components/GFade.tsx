import { Fade, FadeProps } from "@mui/material";
import React, { forwardRef, ReactElement } from "react";

interface GFadeProps extends FadeProps {
  children: ReactElement;
  addEndListener: (node: HTMLElement, done: () => void) => void;
  appear: boolean;
  easing: string;
  in: boolean;
  timeout: number;
}

const GFade = forwardRef(({ addEndListener, appear, easing, in: inProp, timeout, children }: GFadeProps, ref) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    if (appear) {
      setIsVisible(true);
    }
  }, [appear]);

  React.useEffect(() => {
    if (addEndListener) {
      const done = () => {
        // Do something when the transition ends
      };

      // Use o operador `?.` para verificar se o `children` tem um ref antes de acessar o `ref?.current`.
      addEndListener(children?.ref?.current instanceof HTMLElement ? children?.ref?.current : null, done);
    }
  }, [addEndListener, ref]);

  // Renderize o componente `Fade` se `in` for `true` ou se `in` não for fornecido
  if (inProp || inProp === undefined) {
    return (
      <Fade
        in={isVisible}
        timeout={timeout}
        easing={easing}
      >
        {children}
      </Fade>
    );
  } else {
    return null;
  }
});

export default GFade;
