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

const JoinTeam = () => {
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
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      // Validate form data
      formSchema.parse(formData);
      
      setIsSubmitting(true);

      // Simulate submission
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
    <section id="equipo" className="py-12 md:py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <span className="text-4xl mb-4 block">🌟</span>
            <h2 className="font-groovy text-3xl md:text-4xl text-foreground mb-3">
              Únete al equipo
            </h2>
            <p className="text-muted-foreground font-body text-sm md:text-base">
              ¿Tienes talento y pasión por el arte gastronómico? Queremos conocerte.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                name="name"
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={handleChange}
                className={`bg-card border-border ${errors.name ? "border-destructive" : ""}`}
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
                  className={`bg-card border-border ${errors.email ? "border-destructive" : ""}`}
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
                  className={`bg-card border-border ${errors.phone ? "border-destructive" : ""}`}
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
                className={`bg-card border-border resize-none ${errors.message ? "border-destructive" : ""}`}
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
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Enviando..." : "Enviar mi solicitud"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinTeam;
