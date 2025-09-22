import Header from "@/components/Organisms/Header/Header";
import NavBar from "@/components/Organisms/NavBar/NavBar";
import TopBar from "@/components/Organisms/TopBar/TopBar";
import HeroSection from "@/components/Organisms/HeroSection/HeroSection";
import FeaturedSection from "@/components/Organisms/FeaturedSection/FeaturedSection";
import PopularProducts from "@/components/Organisms/PopularProducts/PopularProducts";
import OfferSection from "@/components/Organisms/OfferSection/OfferSection";
import Footer from "@/components/Organisms/Footer/Footer";
import MobileDock from "@/components/Atoms/MobileDock/MobileDock";
import AdCardsSection from "@/components/Organisms/AdCardsSection/AdCardsSection";

export default function Home() {
  return (
    <>
      <div className="border-b border-[#ECECEC]">
        <div className="lg:px-[60px] md:px-[30px] sm:px-[20px] px-[10px] max-[900px]:hidden">
          <TopBar />
        </div>
      </div>

      <div className="border-b border-[#ECECEC]">
        <div className="lg:px-[60px] md:px-[30px] sm:px-[20px] px-[10px]">
          <Header />
        </div>
      </div>

      <div className="border-b border-[#ECECEC]">
        <div className="lg:px-[60px] md:px-[30px] sm:px-[20px] px-[10px]">
          <NavBar />
        </div>
      </div>

      <div className="lg:px-[60px] md:px-[30px] sm:px-[20px] px-[10px]">
        <HeroSection />
      </div>

      <div className="lg:px-[60px] md:px-[30px] sm:px-[20px] px-[10px]">
        <FeaturedSection />
      </div>

      <div className="lg:px-[60px] md:px-[30px] sm:px-[20px] px-[10px]">
        <AdCardsSection />
      </div>

      <div className="lg:px-[60px] md:px-[30px] sm:px-[20px] px-[10px]">
        <PopularProducts />
      </div>

      <div className="lg:px-[60px] md:px-[30px] sm:px-[20px] px-[10px]">
        <OfferSection />
      </div>

      <div className="lg:px-[60px] md:px-[30px] sm:px-[20px] px-[10px]">
        <Footer />
      </div>

      <div className="block md:hidden">
        <MobileDock />
      </div>
    </>
  );
}
