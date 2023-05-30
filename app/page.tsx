import { TeamDetails } from "@/sections/team-details-section";
import { Navbar } from "../components/navbar";
import { FeatureSection } from "@/sections/feature-section";
import { PropertiesSection } from "@/sections/properties-section";
import { QuotesSection } from "@/sections/quotes-section";
import { TeamsData, propertiesSectionData } from "@/mock-data/mock-data";

export default function Home() {
  return (
    <main>
      <Navbar />
      <TeamDetails data={TeamsData} />
      <section className="my-5 container">
        <QuotesSection />
      </section>

      <section className="position-relative">
        <FeatureSection />
      </section>
      <section className="container">
        <PropertiesSection
          heading={"Connesso, Intelligente, Resistente"}
          data={propertiesSectionData}
        />
      </section>
    </main>
  );
}
