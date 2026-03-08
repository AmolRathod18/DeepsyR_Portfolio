import { motion } from "framer-motion";
import { UtensilsCrossed, Sparkles, Heart } from "lucide-react";
import cookingImg from "@/assets/cooking-content.jpg";
import skincareImg from "@/assets/skincare-content.jpg";
import lifestyleImg from "@/assets/lifestyle-content.jpg";

const niches = [
  {
    icon: UtensilsCrossed,
    title: "Cooking",
    description: "Easy, delicious recipes and food content that makes viewers hungry for more.",
    image: cookingImg,
  },
  {
    icon: Sparkles,
    title: "Skincare Tips",
    description: "Honest skincare routines, product reviews, and glow-up tips for everyday beauty.",
    image: skincareImg,
  },
  {
    icon: Heart,
    title: "Lifestyle",
    description: "Authentic day-in-the-life vlogs, hauls, and relatable lifestyle content.",
    image: lifestyleImg,
  },
];

const ContentNiches = () => {
  return (
    <section id="niches" className="section-padding bg-cream">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-primary mb-3">
            Content Niches
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What I Create
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {niches.map((niche, i) => (
            <motion.div
              key={niche.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <img
                src={niche.image}
                alt={niche.title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                width={338}
                height={320}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <niche.icon size={18} className="text-primary" />
                  <h3 className="font-display text-xl font-bold text-primary-foreground">{niche.title}</h3>
                </div>
                <p className="text-sm text-primary-foreground/80 font-body">{niche.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentNiches;
