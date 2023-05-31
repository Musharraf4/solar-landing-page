import { HighlightsCard } from "@/components/highlights-card";
import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import superBonus from "../../public/assets/icons/super-bonus.svg";
import battery from "../../public/assets/icons/battery.svg";
import assignment from "../../public/assets/icons/assignment.svg";
import leaf from "../../public/assets/icons/leaf.svg";

export const HighlightsSection = (props: any) => {
  const { heading, data } = props;
  return (
    <>
      <div className=" container mt-5 ">
        <SectionHeading heading={heading} />
        <div className="row g-3 mt-5 justify-content-center">
          {data?.map((item: any) => {
            return <HighlightsCard item={item} />;
          })}
        </div>
      </div>
      <div className="container-fluid light-background my-4 py-4">
        <div className="container">
          <div className=" row justify-content-center g-3">
            <div className="col-lg-3  col-md-6 col-sm-12">
              <div
                style={{ height: "140px" }}
                className="bg-white border d-flex align-items-center justify-content-center p-2 flex-column box-shadow"
              >
                <Image src={superBonus} alt="bonus-icon" />
                <span className="fw-600 sub-heading-3 primary-text-color">110%</span>
                <span className=" secondary-text-color ">SUPERBONUS</span>
              </div>
            </div>
            <div className="col-lg-3  col-sm-12 col-md-6">
              <div style={{height:'140px'}} className="bg-white border d-flex align-items-center justify-content-center p-2 flex-column box-shadow">
                <Image src={battery} alt="battery-icon" />
                <span className="fw-600 sub-heading-3 primary-text-color">65%</span>
                <span className=" secondary-text-color ">Detrazione DOMOTICA</span>
              </div>
            </div>
            <div className="col-lg-3  col-sm-12 col-md-6">
              <div style={{height:'140px'}} className="bg-white border d-flex align-items-center justify-content-center p-2 flex-column box-shadow">
                <Image src={assignment} alt="assignment-icon" />
                <span className=" secondary-text-color pt-1">Progettazione personalizzata</span>
              </div>
            </div>
            <div className="col-lg-3  col-sm-12 col-md-6">
              <div style={{height:'140px'}} className="bg-white border d-flex align-items-center justify-content-center p-2 flex-column box-shadow">
                <Image src={leaf} alt="leaf-icon" />
                <span className=" secondary-text-color pt-1">consulenza fiscale sui bonus</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
