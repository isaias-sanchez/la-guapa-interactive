import { motion } from "framer-motion";
import { MenuItem, formatPrice } from "@/data/menuData";
import { Badge } from "@/components/ui/badge";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const MenuCard = ({ item, index }: MenuCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group card-menu hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex justify-between items-start gap-3">
        <div className="flex-1 min-w-0">
          {/* Name and Tags */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <h3 className="font-body font-semibold text-foreground text-base md:text-lg">
              {item.name}
            </h3>
            {item.isNew && (
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground text-xs">
                NEW
              </Badge>
            )}
            {item.isFavorite && (
              <span className="text-primary text-sm">★</span>
            )}
          </div>

          {/* Tag */}
          {item.tag && (
            <p className="text-xs text-accent font-body mb-1 italic">
              {item.tag}
            </p>
          )}

          {/* Description */}
          {item.description && (
            <p className="text-sm text-muted-foreground font-body leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
              {item.description}
            </p>
          )}
        </div>

        {/* Price */}
        <div className="flex-shrink-0">
          <span className="font-groovy text-xl md:text-2xl text-primary">
            {formatPrice(item.price)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCard;
