import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <main className="min-h-screen">
      {/* Hero Section - Full viewport with parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax background */}
        <motion.div 
          style={{ y: bgY }}
          className="absolute inset-0 -top-20 -bottom-20"
        >
          <img
            src={heroBg}
            alt="La Guapa - Art Based Bar"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Collage overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-forest/60 via-forest/40 to-forest" />
          
          {/* Paper texture strips */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 40px,
                hsl(var(--cream) / 0.1) 40px,
                hsl(var(--cream) / 0.1) 41px
              )`
            }}
          />
        </motion.div>

        {/* Content */}
        <motion.div 
          style={{ y: textY, opacity }}
          className="relative z-10 container px-4 text-center"
        >
          {/* Retro badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="inline-block mb-8"
          >
            <div className="px-6 py-3 bg-retro-red/90 border-2 border-cream/30 transform rotate-1">
              <span className="text-sm md:text-base text-cream font-body tracking-[0.3em] uppercase">
                Art Based Bar & Restaurant
              </span>
            </div>
          </motion.div>

          {/* Main title with aggressive shadow */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-groovy text-7xl md:text-9xl lg:text-[12rem] text-cream mb-6"
            style={{
              textShadow: `
                4px 4px 0px hsl(var(--retro-red)),
                8px 8px 0px hsl(var(--retro-red) / 0.5),
                12px 12px 20px hsl(0 0% 0% / 0.4)
              `,
              lineHeight: 0.9,
            }}
          >
            La Guapa
          </motion.h1>

          {/* Welcome message - handwritten feel */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-groovy text-2xl md:text-4xl text-cream/90 mb-4"
            style={{
              textShadow: '2px 2px 0px hsl(var(--retro-red) / 0.3)'
            }}
          >
            Bienvenidxs a nuestro hogar
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-lg md:text-xl text-cream/70 font-body max-w-xl mx-auto mb-10"
          >
            Donde el arte y los buenos momentos se vuelven una sola experiencia
          </motion.p>

          {/* CTA Buttons - Retro style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/menu">
              <Button 
                variant="hero" 
                size="lg"
                className="text-lg px-8 py-6 transform hover:-rotate-1 transition-transform"
              >
                Ver el Menú
              </Button>
            </Link>
            <Link to="/cafe">
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-6 border-cream/50 text-cream hover:bg-cream/10 transform hover:rotate-1 transition-transform"
              >
                Café Guapxs ☕
              </Button>
            </Link>
          </motion.div>

          {/* Location badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-12"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-forest-light/50 backdrop-blur-sm rounded-full border border-border/50">
              <span>📍</span>
              <span className="text-sm text-cream/70 font-body">
                Calle 92 #46-218, Barranquilla
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-cream/50 text-3xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </section>

      {/* Quick sections preview */}
      <section className="py-20 bg-forest">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Menu card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
            >
              <Link to="/menu" className="block group">
                <div className="p-8 bg-gradient-to-br from-retro-red/20 to-retro-pink/10 border-2 border-cream/20 hover:border-retro-red/50 transition-all">
                  <span className="text-5xl mb-4 block">🍔</span>
                  <h3 className="font-groovy text-3xl text-cream mb-2 group-hover:text-retro-red transition-colors"
                    style={{ textShadow: '2px 2px 0 hsl(var(--retro-red) / 0.3)' }}
                  >
                    Restobar
                  </h3>
                  <p className="text-cream/60 font-body text-sm">
                    Burgers, pastas, entradas y cócteles con nombres que cuentan historias
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Cafe card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link to="/cafe" className="block group">
                <div className="p-8 bg-gradient-to-br from-retro-gold/20 to-accent/10 border-2 border-cream/20 hover:border-retro-gold/50 transition-all">
                  <span className="text-5xl mb-4 block">☕</span>
                  <h3 className="font-groovy text-3xl text-cream mb-2 group-hover:text-retro-gold transition-colors"
                    style={{ textShadow: '2px 2px 0 hsl(var(--retro-gold) / 0.3)' }}
                  >
                    Café Guapxs
                  </h3>
                  <p className="text-cream/60 font-body text-sm">
                    Viernes y sábados desde las 3PM • Onzas del Caribe, Merendao y más
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* Join card */}
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Link to="/unete" className="block group">
                <div className="p-8 bg-gradient-to-br from-retro-teal/20 to-secondary/10 border-2 border-cream/20 hover:border-retro-teal/50 transition-all">
                  <span className="text-5xl mb-4 block">🌟</span>
                  <h3 className="font-groovy text-3xl text-cream mb-2 group-hover:text-retro-teal transition-colors"
                    style={{ textShadow: '2px 2px 0 hsl(var(--retro-teal) / 0.3)' }}
                  >
                    Únete
                  </h3>
                  <p className="text-cream/60 font-body text-sm">
                    ¿Tienes talento y pasión? Queremos conocerte
                  </p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="py-8 bg-forest-light border-t border-border">
        <div className="container px-4 text-center">
          <p className="font-groovy text-xl text-cream mb-2">La Guapa</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-cream/60 font-body">
            <a href="https://instagram.com/laguapabaq" target="_blank" rel="noopener noreferrer" className="hover:text-retro-red transition-colors">
              📸 @laguapabaq
            </a>
            <span className="hidden md:inline">•</span>
            <span>📍 Calle 92 #46-218, Barranquilla</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Home;
