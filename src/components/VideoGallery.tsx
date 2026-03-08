import { motion } from "framer-motion";
import { Youtube } from "lucide-react";
import YouTubeFacade from "./YouTubeFacade";

const videos = [
  {
    id: "ufB1oZ15rgs",
    title: "Easy Dal Tadka Recipe | Quick & Delicious",
    category: "Cooking",
  },
  {
    id: "jTHJv_yamSA",
    title: "My Morning Skincare Routine 2025",
    category: "Skincare",
  },
];

const VideoGallery = () => {
  return (
    <section id="videos" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-primary mb-3">
            Featured Videos
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Watch My YouTube Content
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow aspect-video bg-muted">
                <YouTubeFacade videoId={video.id} title={video.title} />
              </div>
              <div className="mt-4">
                <span className="text-xs font-body font-semibold uppercase tracking-wider text-primary">
                  {video.category}
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.youtube.com/@DeepsyR604"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 gradient-warm text-primary-foreground px-8 py-3 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-opacity shadow-md"
          >
            <Youtube size={18} />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
