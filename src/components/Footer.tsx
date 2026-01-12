import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-8 bg-forest-light border-t border-border">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo */}
          <h3 className="font-groovy text-2xl text-foreground mb-4">
            La Guapa
          </h3>

          {/* Social & Contact */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-6 text-sm text-muted-foreground font-body">
            <a
              href="https://instagram.com/laguapabaq"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <span>📸</span> @laguapabaq
            </a>
            <span className="hidden md:block">•</span>
            <a
              href="tel:+573007564632"
              className="hover:text-primary transition-colors flex items-center gap-2"
            >
              <span>📞</span> +57 300 756 4632
            </a>
            <span className="hidden md:block">•</span>
            <span className="flex items-center gap-2">
              <span>📍</span> Calle 92 #46-218, Barranquilla
            </span>
          </div>

          {/* Tagline */}
          <p className="text-xs text-muted-foreground/60 font-body">
            Art Based Bar & Restaurant • Donde el arte y los buenos momentos se vuelven una sola experiencia
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
