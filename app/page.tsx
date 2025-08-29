import Header from "@/components/Organisms/Header/Header";
import NavBar from "@/components/Organisms/NavBar/NavBar";
import TopBar from "@/components/Organisms/TopBar/TopBar";
import HeroSection from "@/components/Organisms/HeroSection/HeroSection";

export default function Home() {
  return (
    <>
      <div className="border-b border-[#ECECEC]">
        <div className="px-[60px]">
          <TopBar />
        </div>
      </div>

      <div className="border-b border-[#ECECEC]">
        <div className="px-[60px]">
          <Header />
        </div>
      </div>

      <div className="border-b border-[#ECECEC]">
        <div className="px-[60px]">
          <NavBar />
        </div>
      </div>

      <div className="border-b border-[#ECECEC]">
        <div className="px-[60px]">
          <HeroSection />
        </div>
      </div>
    </>
  );
}
