import { AboutSection } from "@/components/sections/about-section";
import { Footer } from "@/components/layout/footer";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { GoogleReviewsSection } from "@/components/sections/google-reviews-section";
import { HeroSection } from "@/components/sections/hero-section";
import { InfoSection } from "@/components/sections/info-section";
import { MenuSection } from "@/components/sections/menu-section";
import { OrderProcessSection } from "@/components/sections/order-process-section";
import { StorefrontSection } from "@/components/sections/storefront-section";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <StorefrontSection />
        <AboutSection />
        <OrderProcessSection />
        <MenuSection />
        <InfoSection />
        <GoogleReviewsSection />
        <GallerySection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}
