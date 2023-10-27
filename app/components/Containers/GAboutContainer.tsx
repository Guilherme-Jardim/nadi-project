import { useState } from "react";
import { motion } from "react-magic-motion";
import Image from "next/image";
import { Typography } from "@mui/material";

interface GAboutContainerProps {
  text: string;
  imgSrc: string;
  alt: string;
  classname: string;
}

export function GAboutContainer({ text, imgSrc, alt, classname }: GAboutContainerProps) {
  return (
    <div className="bg-black absolute">
      <motion.div
        className="pb-10 flex justify-center items-center bg-black"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1, transition: { scale: { type: "spring" } } }}
      >
        < div className='flex columns-2 w-9/12 '>
          <div className='my-auto'>
            <Typography className='text-white align-middle'>{text}</Typography>
          </div>
          <div className='w-full'>
            <Image
              quality={100}
              sizes="100vw"
              alt={alt}
              src={imgSrc}
              width={0}
              height={0}
              className={classname}
            />
          </div>

        </div>
      </motion.div>
    </div>
  );
}


{/* <div ref={ref} className=' pb-10 pt-28 flex justify-center items-center bg-black'>
        <Fade in={isVisible}></Fade>


        const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        setIsVisible(true);
      }, 2500); // Ajuste o valor do timeout (em milissegundos) para suavizar a animação
    }
  }, [inView]); */}