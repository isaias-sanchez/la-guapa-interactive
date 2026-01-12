import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

// Validation schema
const formSchema = z.object({
  name: z.string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre es muy largo")
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, "Solo se permiten letras"),
  email: z.string()
    .trim()
    .email("Email inválido")
    .max(255, "Email muy largo"),
  phone: z.string()
    .trim()
    .min(7, "Teléfono inválido")
    .max(15, "Teléfono muy largo")
    .regex(/^[0-9+\-\s()]+$/, "Solo números y caracteres válidos"),
  message: z.string()
    .trim()
    .min(10, "Cuéntanos más sobre ti (mínimo 10 caracteres)")
    .max(1000, "El mensaje es muy largo"),
});

const Unete = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      formSchema.parse(formData);
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast({
        title: "¡Gracias por tu interés! 💚",
        description: "Hemos recibido tu solicitud. Te contactaremos pronto.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        err.errors.forEach((error) => {
          if (error.path[0]) {
            newErrors[error.path[0] as string] = error.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-20 pb-16 bg-forest">
      {/* Wanted poster style header */}
      <section className="py-12 md:py-20">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            {/* Poster frame */}
            <div 
              className="relative p-8 md:p-12 bg-cream/5 border-4 border-cream/30"
              style={{
                boxShadow: 'inset 0 0 50px hsl(0 0% 0% / 0.3)',
              }}
            >
              {/* Tape decorations */}
              <div className="absolute -top-2 -left-2 w-16 h-6 bg-cream/20 rotate-45 transform -translate-x-4" />
              <div className="absolute -top-2 -right-2 w-16 h-6 bg-cream/20 -rotate-45 transform translate-x-4" />

              {/* Header */}
              <div className="text-center mb-10">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p 
                    className="font-body text-sm uppercase tracking-[0.5em] text-retro-red mb-4"
                    style={{ textShadow: '1px 1px 0 hsl(var(--cream) / 0.1)' }}
                  >
                    Se busca
                  </p>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="font-groovy text-5xl md:text-7xl text-cream mb-4"
                  style={{
                    textShadow: `
                      3px 3px 0px hsl(var(--retro-red)),
                      6px 6px 0px hsl(var(--retro-red) / 0.3)
                    `
                  }}
                >
                  Talento
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center justify-center gap-4 mb-6"
                >
                  <div className="h-px flex-1 bg-cream/20" />
                  <span className="text-2xl">🌟</span>
                  <div className="h-px flex-1 bg-cream/20" />
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-cream/70 font-body max-w-md mx-auto"
                >
                  ¿Tienes pasión por el arte gastronómico? ¿Te late la vibra retro-pop? 
                  Queremos conocerte.
                </motion.p>
              </div>

              {/* Reward badge */}
              <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: -3 }}
                transition={{ delay: 0.6 }}
                className="absolute -right-4 top-1/4 hidden md:block"
              >
                <div className="w-24 h-24 rounded-full bg-retro-gold border-4 border-cream/50 flex items-center justify-center transform rotate-12">
                  <div className="text-center">
                    <p className="text-forest font-body text-xs font-bold">RECOMPENSA</p>
                    <p className="text-forest font-groovy text-lg">💚</p>
                  </div>
                </div>
              </motion.div>

              {/* Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Tu nombre completo"
                    value={formData.name}
                    onChange={handleChange}
                    className={`bg-cream/10 border-cream/30 text-cream placeholder:text-cream/40 focus:border-retro-red ${errors.name ? "border-destructive" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="text-destructive text-xs mt-1">{errors.name}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="tu@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      className={`bg-cream/10 border-cream/30 text-cream placeholder:text-cream/40 focus:border-retro-red ${errors.email ? "border-destructive" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Tu teléfono"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`bg-cream/10 border-cream/30 text-cream placeholder:text-cream/40 focus:border-retro-red ${errors.phone ? "border-destructive" : ""}`}
                      disabled={isSubmitting}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Cuéntanos sobre ti, tu experiencia y por qué quieres ser parte de La Guapa..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className={`bg-cream/10 border-cream/30 text-cream placeholder:text-cream/40 resize-none focus:border-retro-red ${errors.message ? "border-destructive" : ""}`}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full text-lg transform hover:-rotate-1 transition-transform"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar mi solicitud"}
                </Button>
              </motion.form>

              {/* Bottom decoration */}
              <div className="mt-8 text-center">
                <p className="text-cream/40 font-body text-xs uppercase tracking-widest">
                  ★ La Guapa • Art Based Bar ★
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Unete;
