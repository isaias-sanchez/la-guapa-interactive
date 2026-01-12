import { motion, useScroll, useTransform } from "framer-motion";

// Decorative elements that float at different parallax speeds
const ParallaxDecorations = () => {
  const { scrollY } = useScroll();
  
  // Different parallax speeds for depth
  const y1 = useTransform(scrollY, [0, 1000], [0, -150]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -250]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -100]);
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -30]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Retro star - top right */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[15%] right-[8%] text-retro-gold/30"
      >
        <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L14.5 9H22L16 13.5L18 21L12 17L6 21L8 13.5L2 9H9.5L12 2Z" />
        </svg>
      </motion.div>

      {/* Flower - left side */}
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[40%] left-[3%] text-retro-pink/25 hidden md:block"
      >
        <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="30" r="15" />
          <circle cx="30" cy="45" r="15" />
          <circle cx="70" cy="45" r="15" />
          <circle cx="35" cy="70" r="15" />
          <circle cx="65" cy="70" r="15" />
          <circle cx="50" cy="50" r="12" fill="hsl(var(--retro-gold))" opacity="0.5" />
        </svg>
      </motion.div>

      {/* Lightning bolt - right */}
      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute top-[60%] right-[5%] text-retro-red/20"
      >
        <svg width="50" height="70" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L4 14H11L10 22L20 10H13L13 2Z" />
        </svg>
      </motion.div>

      {/* Abstract circle - bottom left */}
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-[20%] left-[10%] hidden lg:block"
      >
        <div className="w-24 h-24 rounded-full border-4 border-dashed border-retro-teal/20" />
      </motion.div>

      {/* Retro rays - top left */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[25%] left-[15%] text-accent/15 hidden lg:block"
      >
        <svg width="100" height="100" viewBox="0 0 100 100">
          <g stroke="currentColor" strokeWidth="2" fill="none">
            <line x1="50" y1="0" x2="50" y2="100" />
            <line x1="0" y1="50" x2="100" y2="50" />
            <line x1="15" y1="15" x2="85" y2="85" />
            <line x1="85" y1="15" x2="15" y2="85" />
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default ParallaxDecorations;
