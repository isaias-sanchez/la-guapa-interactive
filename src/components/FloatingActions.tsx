import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, ShoppingBag } from "lucide-react";

const FloatingActions = () => {
  const phoneNumber = "573007564632";
  const whatsappMessage = encodeURIComponent("¡Hola! Quiero hacer un pedido a La Guapa 🍔");

  return (
    <div className="fab-container">
      {/* Rappi Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      >
        <Button
          variant="rappi"
          size="fab"
          asChild
          className="group"
        >
          <a
            href="https://www.rappi.com.co/restaurantes/la-guapa"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pedir por Rappi"
          >
            <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </Button>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.3, type: "spring", stiffness: 200 }}
      >
        <Button
          variant="whatsapp"
          size="fab"
          asChild
          className="group animate-pulse-glow"
        >
          <a
            href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Pedir por WhatsApp"
          >
            <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </Button>
      </motion.div>
    </div>
  );
};

export default FloatingActions;
