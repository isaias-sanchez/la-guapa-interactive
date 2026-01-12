import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { restobarMenu, cafeteriaMenu } from "@/data/menuData";
import { Button } from "@/components/ui/button";
import MenuCard from "./MenuCard";

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState<"restobar" | "cafeteria">("restobar");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const currentMenu = activeTab === "restobar" ? restobarMenu : cafeteriaMenu;
  
  // Set default category if none selected
  const selectedCategory = activeCategory || currentMenu.categories[0]?.id;
  const categoryData = currentMenu.categories.find(c => c.id === selectedCategory);

  return (
    <section id="menu" className="py-12 md:py-20 bg-background">
      <div className="container px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-groovy text-4xl md:text-5xl text-foreground mb-4 text-groovy">
            Nuestro Menú
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Antójate de nuestras creaciones con nombres que cuentan historias
          </p>
        </motion.div>

        {/* Main Tabs: Restobar / Cafetería */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            variant={activeTab === "restobar" ? "menuTabActive" : "menuTab"}
            size="lg"
            onClick={() => {
              setActiveTab("restobar");
              setActiveCategory(null);
            }}
            className="text-base"
          >
            {restobarMenu.icon} Restobar
          </Button>
          <Button
            variant={activeTab === "cafeteria" ? "menuTabActive" : "menuTab"}
            size="lg"
            onClick={() => {
              setActiveTab("cafeteria");
              setActiveCategory(null);
            }}
            className="text-base"
          >
            {cafeteriaMenu.icon} Café
          </Button>
        </div>

        {/* Cafeteria Notice */}
        <AnimatePresence>
          {activeTab === "cafeteria" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-center mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 rounded-full border border-accent/30">
                <span className="text-accent">☀️</span>
                <span className="text-sm font-body text-accent">
                  Viernes y Sábados desde las 3PM
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Category Tabs */}
        <div className="overflow-x-auto pb-4 mb-6 scroll-snap-x">
          <div className="flex gap-2 min-w-max justify-start md:justify-center px-1">
            {currentMenu.categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className="scroll-snap-item whitespace-nowrap"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {categoryData?.items.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Martes Promo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 max-w-md mx-auto"
        >
          <div className="relative p-6 rounded-lg bg-gradient-to-r from-primary/20 to-retro-pink/20 border border-primary/30 text-center">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-body font-semibold">
              PROMO
            </div>
            <h3 className="font-groovy text-2xl text-foreground mb-2">
              Martes de 2x1
            </h3>
            <p className="text-sm text-muted-foreground font-body">
              En cóctel y soda • Aplican T&C
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;
