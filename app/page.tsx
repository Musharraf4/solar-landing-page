import { TeamDetails } from "@/sections/team-details-section";
import { FeatureSection } from "@/sections/feature-section";
import { PropertiesSection } from "@/sections/properties-section";
import { QuotesSection } from "@/sections/quotes-section";
import { TeamsData, highlightsData, propertiesSectionData } from "@/mock-data/mock-data";
import { Header } from "@/sections/header-section";
import { HighlightsSection } from "@/sections/highlights-section";
import { ChoosePackageSection } from "@/sections/choose-package-section";
import { QuestionSection } from "@/sections/question-section";
import { ContactSection } from "@/sections/contact-section";
import { FooterSection } from "@/sections/footer-section";


export default function Home() {
  return (
    <main>
      <Header />
      {/* <Navbar /> */}
      <TeamDetails data={TeamsData} />
      <section className="my-5 container">
        <QuotesSection />
      </section>

      <section className="position-relative">
        <FeatureSection />
      </section>
      <section>
        <PropertiesSection
          heading={"Connesso, Intelligente, Resistente"}
          data={propertiesSectionData}
        />
      </section>
      <section>
        <HighlightsSection heading={"Perchè S.I.R.E."} data={highlightsData} />
      </section>
      <section >
        <ChoosePackageSection />
      </section>

      <section >
        <QuestionSection />
      </section>

      <section >
        <ContactSection/>
      </section>

      <footer >
        <FooterSection/>
      </footer>
      </main>
  );
}
