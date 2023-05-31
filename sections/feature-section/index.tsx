import React from "react";
import satellite from "../../public/assets/satellite.png";
import solar from "../../public/assets/solar.png";
import Image from "next/image";

import dottedSquare from "../../public/assets/dotted-square.svg";

export const FeatureSection = () => {
  return (
    <div className="container-fluid " style={{ marginBottom: "200px" }}>
      <Image
        src={dottedSquare}
        className="position-absolute image-thumbnail"
        alt={"dotted-square"}
        style={{ left: 40, top: -20 }}
      />
      <Image
        src={dottedSquare}
        className="position-absolute"
        alt={"dotted-square"}
        style={{ right: 100 }}
      />
      <div className="container ">
        <div className="row">
          <div className="col-lg-6 position-relative py-5 d-sm-block d-none">
            <div>
              <Image className="rounded-2" src={satellite} alt="" />
            </div>
            <div className="position-absolute" style={{ marginLeft: "190px", top: 200 }}>
              <Image className="rounded-2" src={solar} alt="" />
            </div>
          </div>
          <div className=" col-lg-6 py-5">
            <span className="sub-heading-1 heading-text-color fw-500">S.I.R.E</span>
            <br />
            <span className="primary-heading primary-text-color fw-600">
              Smart Integrated Renewable Energy
            </span>
            {/* underline */}
            <p className="secondary-text-color sub-heading">
              S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo per la produzione,
              conversione e gestione dell'energia solare, studiato specificatamente per
              installazioni all'interno di condomini.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
