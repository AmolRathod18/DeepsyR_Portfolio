import { motion } from "framer-motion";
import { Video, Camera, ShoppingBag, Megaphone, Star, Users, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "UGC Content",
    description: "Authentic user-generated content that builds trust and drives conversions for your brand.",
    badge: "Most Popular",
  },
  {
    icon: Camera,
    title: "Brand Collaborations",
    description: "Dedicated YouTube videos, reels, and stories featuring your products organically.",
    badge: null,
  },
  {
    icon: ShoppingBag,
    title: "Product Promotions",
    description: "Strategic product placements and reviews in cooking, skincare, and lifestyle content.",
    badge: null,
  },
  {
    icon: Megaphone,
    title: "Social Media Campaigns",
    description: "Multi-platform campaign execution across YouTube, Instagram, and more.",
    badge: null,
  },
  {
    icon: Star,
    title: "Content Photography",
    description: "High-quality product and lifestyle photography for your marketing materials.",
    badge: null,
  },
  {
    icon: Users,
    title: "Brand Ambassador",
    description: "Long-term partnerships with ongoing content creation and community engagement.",
    badge: "Best Value",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-primary mb-3">
            Services
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            How I Can Help Your Brand
          </h2>
          <p className="text-muted-foreground font-body mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            From a single reel to full-scale campaigns — I create content that converts and communities that care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-border group hover:border-primary/30 hover:-translate-y-1"
            >
              {service.badge && (
                <span className="absolute top-4 right-4 text-[10px] font-body font-bold uppercase tracking-wider bg-primary/10 text-primary px-2.5 py-1 rounded-full border border-primary/20">
                  {service.badge}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl gradient-warm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon size={22} className="text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center bg-background rounded-3xl p-10 border border-border shadow-sm"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
            Ready to work together?
          </h3>
          <p className="text-muted-foreground font-body text-sm mb-6 max-w-md mx-auto">
            Let's create content that your audience loves and your brand is proud of.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 gradient-warm text-primary-foreground px-8 py-3.5 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
          >
            Get in Touch <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
