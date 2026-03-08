import { motion } from "framer-motion";
import aboutImg from "@/assets/about-photo.jpg";

const stats = [
  { value: "50K+", label: "Followers", emoji: "👥" },
  { value: "200+", label: "Videos", emoji: "🎬" },
  { value: "30+", label: "Brand Collabs", emoji: "🤝" },
  { value: "5M+", label: "Views", emoji: "👁️" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Decorative blob behind image */}
          <div className="absolute -top-6 -left-6 w-40 h-40 rounded-full bg-primary/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-rose-300/15 blur-2xl pointer-events-none" />
          <img
            src={aboutImg}
            alt="Deepsy Rathod lifestyle"
            className="relative rounded-3xl shadow-2xl w-full max-w-md mx-auto border-4 border-white"
            width={448}
            height={508}
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-primary mb-3">
            About Me
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Creating Content That Connects
          </h2>
          <p className="text-muted-foreground font-body leading-relaxed mb-4">
            I'm Deepsy Rathod — a passionate content creator who transforms everyday moments into engaging stories. From easy-to-follow cooking recipes to honest skincare routines and authentic lifestyle vlogs, I create content that resonates with real people.
          </p>
          <p className="text-muted-foreground font-body leading-relaxed mb-8">
            I've partnered with 30+ brands to produce user-generated content and product promotions that drive real results. My community trusts my recommendations because I only share products I truly believe in.
          </p>

          {/* Styled stat cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center bg-gradient-to-br from-primary/8 to-muted border border-primary/15 rounded-2xl p-4 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <p className="text-xl mb-1">{stat.emoji}</p>
                <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground font-body mt-1 leading-tight">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
