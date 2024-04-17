import Navigation from "../modules/navigation/Navigation";
import MissionValues from "../modules/missionValues/MissionValues";
import Wellcome from "../modules/wellcome/Wellcome";
import Banner from "../modules/banner/Banner";
import Destination from "../modules/destination/Destination";
import Premisses from "../modules/premisses/Premisses";
import ScrollToTop from "../modules/scrollToTop/ScrollToTop";
import HumanRights from "../modules/humanRights/HumanRights";
import HealthAndSecurity from "../modules/healthAndSecurity/HealthAndSecurity";
import ImportantContacts from "../modules/importantContacts/ImportantContacts";
import Commitment from "../modules/commitment/Commitment";
import Footer from "../modules/footer/Footer";
import Header from "../modules/header/Header";

import { bannerText } from "../utils/bannerContent";
import { useEffect } from "react";

const EticaEConduta = () => {
  useEffect(() => {
    console.log(bannerText);
  }, []);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Affix */}
      <ScrollToTop />

      {/* Nav Component */}
      <Navigation />

      {/* Page Components */}
      <Wellcome />
      <MissionValues />
      <Banner text={bannerText[0].text} />
      <Destination />
      <Premisses />
      <Banner text={bannerText[1].text} />
      <HumanRights />
      <HealthAndSecurity />
      <ImportantContacts />
      <Commitment />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default EticaEConduta;
