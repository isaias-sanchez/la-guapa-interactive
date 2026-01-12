import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { restobarMenu, bebidasMenu, cervezasMenu, limonadasMenu } from "@/data/menuData";
import { Button } from "@/components/ui/button";
import VinylCard from "@/components/menu/VinylCard";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<string>(restobarMenu.categories[0]?.id || "");
  
  const allCategories = [
    ...restobarMenu.categories,
    bebidasMenu,
    cervezasMenu,
    limonadasMenu,
  ];
  
  const selectedCategory = allCategories.find(c => c.id === activeCategory);

  return (
    <main className="min-h-screen pt-20 pb-16 bg-forest">
      {/* Header - Poster style */}
      <section className="py-12 md:py-20 border-b-2 border-dashed border-cream/20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center relative"
          >
            {/* Decorative tape */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 w-20 h-6 bg-cream/10 rotate-2" />
            
            <span className="text-6xl mb-4 block">🍔</span>
            
            <h1 
              className="font-groovy text-5xl md:text-7xl lg:text-8xl text-cream mb-4"
              style={{
                textShadow: `
                  3px 3px 0px hsl(var(--retro-red)),
                  6px 6px 0px hsl(var(--retro-red) / 0.4)
                `
              }}
            >
              Restobar
            </h1>
            
            <p className="text-cream/70 font-body text-lg max-w-lg mx-auto">
              Antójate de nuestras creaciones con nombres que cuentan historias
            </p>

            {/* Promo badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: -3 }}
              transition={{ delay: 0.3 }}
              className="inline-block mt-8"
            >
              <div className="px-6 py-3 bg-retro-red border-2 border-cream/30">
                <span className="font-groovy text-xl text-cream">
                  🎉 Martes 2x1 en cóctel y soda
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Category navigation - Magazine tabs */}
      <section className="sticky top-16 z-40 py-4 bg-forest/95 backdrop-blur-sm border-b border-border/50">
        <div className="container px-4">
          <div className="overflow-x-auto pb-2 -mx-4 px-4">
            <div className="flex gap-2 min-w-max">
              {allCategories.map((category, i) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    whitespace-nowrap font-body uppercase tracking-wider text-xs
                    ${activeCategory === category.id 
                      ? "bg-retro-red text-cream border-retro-red" 
                      : "border-cream/30 text-cream/70 hover:border-cream/50"
                    }
                  `}
                  style={{
                    transform: `rotate(${(i % 3 - 1) * 0.5}deg)`,
                  }}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid - Asymmetric poster layout */}
      <section className="py-12">
        <div className="container px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Category title */}
              <motion.h2
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="font-groovy text-3xl md:text-4xl text-retro-gold mb-8 transform -rotate-1"
                style={{ textShadow: '2px 2px 0 hsl(var(--retro-red) / 0.3)' }}
              >
                {selectedCategory?.name}
              </motion.h2>

              {/* Grid - asymmetric */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {selectedCategory?.items.map((item, index) => (
                  <VinylCard 
                    key={item.id} 
                    item={item} 
                    index={index}
                    category={selectedCategory.name}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
};

export default Menu;
