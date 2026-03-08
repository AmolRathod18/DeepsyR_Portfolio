import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContentNiches from "@/components/ContentNiches";
import VideoGallery from "@/components/VideoGallery";
import ReelsGrid from "@/components/ReelsGrid";
import PhotoGallery from "@/components/PhotoGallery";
import ServicesSection from "@/components/ServicesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ContentNiches />
      <VideoGallery />
      <ReelsGrid />
      <PhotoGallery />
      <ServicesSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
