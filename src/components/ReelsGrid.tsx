import { motion } from "framer-motion";
import { Instagram, Play, ExternalLink } from "lucide-react";
import YouTubeFacade from "./YouTubeFacade";
import ugc1Img from "@/assets/cooking-content.jpg";
import ugc2Img from "@/assets/skincare-content.jpg";
import ugc3Img from "@/assets/lifestyle-content.jpg";
import ugc4Img from "@/assets/about-photo.jpg";

const INSTAGRAM_PROFILE = "https://www.instagram.com/ugcbydeepsy?igsh=MWxyMnZ0ajBzZjgxbQ==";

const ytShorts = [
  { id: "QcL2oF4z1Rs", title: "Quick Recipe ☕" },
  { id: "WJwnNOl4K_U", title: "Lifestyle Short ✨" },
];

const igReels = [
  { code: "DT2jcONkvvZ", title: "Cooking UGC", tag: "Recipe Collab", image: ugc1Img },
  { code: "DUVZ8Nlko4j", title: "Skincare UGC", tag: "Beauty Brand", image: ugc2Img },
  { code: "DUSz8wAErmS", title: "Lifestyle UGC", tag: "Lifestyle Collab", image: ugc3Img },
  { code: "DUf8uymEoff", title: "Brand Reel", tag: "Brand Collab", image: ugc4Img },
];

const ReelsGrid = () => {
  return (
    <section id="reels" className="section-padding bg-cream">
      <div className="container mx-auto">
        {/* YouTube Shorts */}
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-primary mb-3">
            Short Videos
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Reels & Shorts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-24">
          {ytShorts.map((reel, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-secondary">
                <YouTubeFacade videoId={reel.id} title={reel.title} />
              </div>
              <p className="mt-3 text-center text-sm text-foreground font-body font-medium">
                {reel.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Instagram UGC Reels */}
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-primary mb-3">
            <Instagram className="inline-block mr-2" size={16} />
            Instagram UGC Content
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            UGC Brand Videos
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {igReels.map((reel, i) => (
            <motion.a
              key={i}
              href={`https://www.instagram.com/reel/${reel.code}/`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group block"
            >
              <div className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all">
                {/* Real cover image */}
                <img
                  src={reel.image}
                  alt={reel.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />

                {/* Top tag badge */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-body font-semibold uppercase tracking-wider bg-primary/90 text-primary-foreground px-2.5 py-1 rounded-full">
                    {reel.tag}
                  </span>
                </div>

                {/* Play button center */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-300">
                    <Play className="text-white ml-1" size={24} fill="currentColor" />
                  </div>
                </div>

                {/* Bottom info bar */}
                <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Instagram size={13} className="text-white" />
                    <span className="text-[11px] text-white font-body font-medium">{reel.title}</span>
                  </div>
                  <ExternalLink size={12} className="text-white/70" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-warm text-primary-foreground px-8 py-3 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
          >
            <Instagram size={18} />
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReelsGrid;
