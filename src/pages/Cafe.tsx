import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cafeteriaMenu } from "@/data/menuData";
import { Button } from "@/components/ui/button";
import VinylCard from "@/components/menu/VinylCard";

const Cafe = () => {
  const [activeCategory, setActiveCategory] = useState<string>(cafeteriaMenu.categories[0]?.id || "");
  const selectedCategory = cafeteriaMenu.categories.find(c => c.id === activeCategory);

  return (
    <main className="min-h-screen pt-20 pb-16 cafe-page">
      {/* Custom cafe background - cream/nostalgic */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: `
            linear-gradient(135deg, 
              hsl(34 30% 18%) 0%, 
              hsl(30 25% 14%) 50%,
              hsl(34 20% 12%) 100%
            )
          `
        }}
      />

      {/* Paper texture for cafe */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10">
        {/* Header - Nostalgic cafe poster */}
        <section className="py-12 md:py-20 border-b-2 border-dashed border-cream/20">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center relative"
            >
              {/* Coffee stain decoration */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border-4 border-cream/20"
              />

              <span className="text-6xl mb-4 block">☕</span>
              
              <h1 
                className="font-groovy text-5xl md:text-7xl lg:text-8xl text-cream mb-4"
                style={{
                  textShadow: `
                    3px 3px 0px hsl(var(--retro-gold)),
                    6px 6px 0px hsl(var(--retro-gold) / 0.3)
                  `
                }}
              >
                Café Guapxs
              </h1>
              
              <p className="text-cream/70 font-body text-lg max-w-lg mx-auto mb-6">
                Un rincón nostálgico con sabor a costa caribeña
              </p>

              {/* Schedule badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block"
              >
                <div className="px-6 py-3 bg-retro-gold/20 border-2 border-retro-gold/50 rounded-none transform -rotate-1">
                  <span className="text-retro-gold font-body text-sm uppercase tracking-widest">
                    ☀️ Viernes y Sábados desde las 3PM
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Category navigation */}
        <section className="sticky top-16 z-40 py-4 bg-[hsl(34_30%_18%/0.95)] backdrop-blur-sm border-b border-cream/20">
          <div className="container px-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {cafeteriaMenu.categories.map((category, i) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    font-body uppercase tracking-wider text-xs
                    ${activeCategory === category.id 
                      ? "bg-retro-gold text-forest border-retro-gold" 
                      : "border-cream/30 text-cream/70 hover:border-cream/50"
                    }
                  `}
                  style={{ transform: `rotate(${(i - 1) * 0.5}deg)` }}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="py-12">
          <div className="container px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.h2
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  className="font-groovy text-3xl md:text-4xl text-retro-gold mb-8 transform rotate-1"
                  style={{ textShadow: '2px 2px 0 hsl(var(--retro-red) / 0.2)' }}
                >
                  {selectedCategory?.name}
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {selectedCategory?.items.map((item, index) => (
                    <VinylCard 
                      key={item.id} 
                      item={item} 
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Cafe special message */}
        <section className="py-12">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto text-center p-8 border-2 border-dashed border-retro-gold/30 bg-retro-gold/5"
            >
              <p className="font-groovy text-2xl text-cream mb-2" style={{ textShadow: '1px 1px 0 hsl(var(--retro-gold) / 0.3)' }}>
                "Un café pa' la mañana, otro pa' recordar..."
              </p>
              <p className="text-cream/50 font-body text-sm">
                — El equipo de La Guapa
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Cafe;
