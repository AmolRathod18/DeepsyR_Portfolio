import { motion } from "framer-motion";
import { Youtube, Instagram, ArrowDown, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center gradient-cream relative overflow-hidden">
      {/* Decorative floating blobs */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-accent/15 blur-2xl pointer-events-none" />

      <div className="container mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          {/* Label pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-body font-semibold tracking-widest uppercase mb-5"
          >
            <Sparkles size={12} />
            Content Creator & UGC Specialist
          </motion.div>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">Deepsy Rathod</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8 font-body leading-relaxed">
            Cooking enthusiast, skincare lover & lifestyle creator — helping brands tell authentic stories through engaging content.
          </p>
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#contact"
              className="gradient-warm text-primary-foreground px-8 py-3.5 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
            >
              Let's Collaborate
            </a>
            <a
              href="#videos"
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-body font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Watch Content
            </a>
          </div>

          {/* Social links with platform labels */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/@DeepsyR604"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-background border border-border hover:border-primary px-4 py-2 rounded-full text-xs font-body font-semibold text-muted-foreground hover:text-primary transition-all shadow-sm group"
              aria-label="YouTube"
            >
              <Youtube size={15} className="group-hover:scale-110 transition-transform" />
              YouTube
            </a>
            <a
              href="https://www.instagram.com/ugcbydeepsy?igsh=MWxyMnZ0ajBzZjgxbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-background border border-border hover:border-primary px-4 py-2 rounded-full text-xs font-body font-semibold text-muted-foreground hover:text-primary transition-all shadow-sm group"
              aria-label="Instagram"
            >
              <Instagram size={15} className="group-hover:scale-110 transition-transform" />
              Instagram
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="relative">
            {/* Pulsing glow ring */}
            <div className="absolute inset-0 rounded-full bg-primary/20 scale-110 animate-pulse blur-md" />
            {/* Outer decorative ring */}
            <div className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow" />

            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={heroImg}
                alt="Deepsy Rathod - Content Creator"
                className="w-full h-full object-cover"
                width={384}
                height={384}
                fetchPriority="high"
              />
            </div>

            {/* Floating stat badges */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-4 -right-4 bg-white text-foreground px-4 py-2 rounded-2xl font-body font-bold text-sm shadow-xl border border-border flex items-center gap-2"
            >
              <span className="text-primary">★</span> 50K+ Followers
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-4 -left-4 bg-white text-foreground px-4 py-2 rounded-2xl font-body font-bold text-sm shadow-xl border border-border flex items-center gap-2"
            >
              <span className="text-primary">🎬</span> 5M+ Views
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
