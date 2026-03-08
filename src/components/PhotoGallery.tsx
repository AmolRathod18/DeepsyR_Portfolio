import { motion } from "framer-motion";
import cookingImg from "@/assets/cooking-content.jpg";
import skincareImg from "@/assets/skincare-content.jpg";
import lifestyleImg from "@/assets/lifestyle-content.jpg";
import heroImg from "@/assets/hero-profile.jpg";

const photos = [
  { src: cookingImg, alt: "Cooking content", span: "md:col-span-2 md:row-span-2" },
  { src: skincareImg, alt: "Skincare products", span: "" },
  { src: lifestyleImg, alt: "Lifestyle content", span: "" },
  { src: heroImg, alt: "Deepsy Rathod", span: "" },
  { src: cookingImg, alt: "Food photography", span: "md:col-span-2" },
];

const PhotoGallery = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-body font-semibold tracking-widest uppercase text-primary mb-3">
            Photo Gallery
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Behind the Content
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-xl overflow-hidden group ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                width={400}
                height={220}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
