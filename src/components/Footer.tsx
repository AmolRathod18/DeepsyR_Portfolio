import { Youtube, Instagram, Heart, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Content", href: "#niches" },
  { label: "Videos", href: "#videos" },
  { label: "Reels", href: "#reels" },
  { label: "Gallery", href: "#gallery" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <p className="font-display text-2xl font-bold mb-2">
            Deepsy<span className="text-primary">.</span>
          </p>
          <p className="text-sm text-primary-foreground/60 font-body mb-5 leading-relaxed max-w-xs">
            Content Creator · UGC Specialist · Lifestyle Influencer based in Bengaluru, India.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.youtube.com/@DeepsyR604"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary transition-colors text-sm font-body"
              aria-label="YouTube"
            >
              <Youtube size={18} /> YouTube
            </a>
            <a
              href="https://www.instagram.com/ugcbydeepsy?igsh=MWxyMnZ0ajBzZjgxbQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary transition-colors text-sm font-body"
              aria-label="Instagram"
            >
              <Instagram size={18} /> Instagram
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="text-xs font-body font-bold uppercase tracking-widest text-primary-foreground/40 mb-4">
            Quick Links
          </p>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-body text-primary-foreground/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-xs font-body font-bold uppercase tracking-widest text-primary-foreground/40 mb-4">
            Get in Touch
          </p>
          <div className="space-y-3">
            <a
              href="mailto:deepa55rathod@gmail.com"
              className="flex items-center gap-3 text-sm font-body text-primary-foreground/60 hover:text-primary transition-colors"
            >
              <Mail size={15} /> deepa55rathod@gmail.com
            </a>
            <div className="flex items-center gap-3 text-sm font-body text-primary-foreground/60">
              <MapPin size={15} /> Bengaluru, India
            </div>
          </div>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gradient-warm text-primary-foreground px-5 py-2.5 rounded-full text-xs font-body font-semibold hover:opacity-90 transition-opacity shadow"
          >
            Let's Collaborate →
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-5 px-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-primary-foreground/30 font-body flex items-center gap-1">
            Made with <Heart size={11} className="text-primary" /> © 2026 Deepsy Rathod. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/20 font-body">
            Bengaluru, Karnataka · India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
