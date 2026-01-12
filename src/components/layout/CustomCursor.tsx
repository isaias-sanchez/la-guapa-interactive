import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 400 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only show on desktop
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Track hover on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], .menu-item, .vinyl-card');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor circle */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          opacity: isVisible ? 1 : 0,
        }}
      >
        <motion.div
          className="rounded-full border-2 border-cream"
          animate={{
            width: isHovering ? 60 : 40,
            height: isHovering ? 60 : 40,
            backgroundColor: isHovering ? "hsl(354 78% 56% / 0.3)" : "transparent",
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-primary ml-[16px] mt-[16px]"
          animate={{
            scale: isHovering ? 0 : 1,
          }}
          transition={{ duration: 0.15 }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
