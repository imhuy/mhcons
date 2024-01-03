import SectionMagazine5 from "@/app/blog/SectionMagazine5";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import Heading from "@/components/Heading/Heading";
import SectionClientSay from "@/components/SectionClientSay/SectionClientSay";
import SectionGridMoreExplore from "@/components/SectionGridMoreExplore/SectionGridMoreExplore";
import SectionHero2 from "@/components/SectionHero/SectionHero2";
import SectionPromo3 from "@/components/SectionPromo3";
import ButtonSecondary from "@/shared/Button/ButtonSecondary";



function PageHome() {

  return (
    <div className="nc-PageHome relative overflow-hidden">
      <SectionHero2 />


      <div className="container relative space-y-24 my-24 lg:space-y-32 lg:my-32">


        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <SectionGridMoreExplore />
        </div>

        {/* <SectionPromo3 /> */}
        <div className="relative py-24 lg:py-32">
          <BackgroundSection />
          <div>
            <Heading rightDescText="Giải pháp tư vấn và đầu tư xây dựng">
              MHCONS
            </Heading>
            <SectionMagazine5 />
             
          </div>
        </div>
        <SectionClientSay />
      </div>
    </div>
  );
}

export default PageHome;
