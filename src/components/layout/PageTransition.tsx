import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

// Paper tear / magazine slide effect
const pageVariants = {
  initial: {
    opacity: 0,
    x: "100%",
    rotateY: -15,
    scale: 0.9,
  },
  in: {
    opacity: 1,
    x: 0,
    rotateY: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    x: "-100%",
    rotateY: 15,
    scale: 0.9,
  },
};

const pageTransition = {
  type: "tween" as const,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
  duration: 0.6,
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        style={{ perspective: 1000 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
