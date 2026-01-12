import { motion } from "framer-motion";
import { MenuItem, formatPrice } from "@/data/menuData";
import { Badge } from "@/components/ui/badge";

interface VinylCardProps {
  item: MenuItem;
  index: number;
  category?: string;
}

// Vinyl record / poster style card for menu items
const VinylCard = ({ item, index, category }: VinylCardProps) => {
  // Color variations based on index for variety
  const colorSchemes = [
    { bg: "from-retro-red/20 to-retro-pink/10", accent: "text-retro-red" },
    { bg: "from-retro-teal/20 to-secondary/10", accent: "text-retro-teal" },
    { bg: "from-retro-gold/20 to-accent/10", accent: "text-retro-gold" },
    { bg: "from-retro-pink/20 to-retro-red/10", accent: "text-retro-pink" },
  ];
  const scheme = colorSchemes[index % colorSchemes.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      whileHover={{ 
        scale: 1.02, 
        rotate: 1,
        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.5)"
      }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className={`
        vinyl-card relative overflow-hidden rounded-none
        bg-gradient-to-br ${scheme.bg}
        border-2 border-foreground/20
        p-6 cursor-pointer
        transform-gpu
      `}
      style={{
        // Asymmetric positioning for fanzine feel
        marginTop: index % 2 === 0 ? 0 : '20px',
        marginLeft: index % 3 === 0 ? '5px' : 0,
      }}
    >
      {/* Vinyl hole decoration */}
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full border-2 border-foreground/30 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-foreground/40" />
      </div>

      {/* Tape decoration */}
      <div className="absolute -top-1 left-1/4 w-12 h-4 bg-cream/10 rotate-3" />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {item.isNew && (
          <Badge variant="secondary" className="bg-retro-teal text-forest text-xs font-bold uppercase tracking-wider">
            ¡NUEVO!
          </Badge>
        )}
        {item.isFavorite && (
          <Badge variant="secondary" className="bg-retro-red text-cream text-xs font-bold uppercase tracking-wider">
            ★ FAV
          </Badge>
        )}
        {item.tag && (
          <Badge variant="outline" className="border-retro-gold/50 text-retro-gold text-xs">
            {item.tag}
          </Badge>
        )}
      </div>

      {/* Item name - groovy typography */}
      <h3 className={`font-groovy text-2xl md:text-3xl mb-2 ${scheme.accent}`}
        style={{
          textShadow: '2px 2px 0px hsl(var(--retro-red) / 0.3), 4px 4px 0px hsl(var(--cream) / 0.1)'
        }}
      >
        {item.name}
      </h3>

      {/* Category label */}
      {category && (
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3 font-body">
          {category}
        </p>
      )}

      {/* Description */}
      {item.description && (
        <p className="text-sm text-foreground/80 font-body leading-relaxed mb-4 line-clamp-3">
          {item.description}
        </p>
      )}

      {/* Price - poster style */}
      <div className="flex items-end justify-between mt-auto pt-4 border-t border-foreground/10">
        <span className="font-groovy text-3xl md:text-4xl text-foreground"
          style={{
            textShadow: '3px 3px 0px hsl(var(--retro-red) / 0.4)'
          }}
        >
          {formatPrice(item.price)}
        </span>
        <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center">
          <span className="text-xs">→</span>
        </div>
      </div>

      {/* Corner decoration */}
      <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute bottom-2 right-2 w-12 h-12 border border-foreground/10 rotate-45" />
      </div>
    </motion.div>
  );
};

export default VinylCard;
