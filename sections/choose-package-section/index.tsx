import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import direct from "../../public/assets/direct.svg";
import "./index.css";
import full from "../../public/assets/full.svg";
import batterLife from "../../public/assets/icons/battery-life.svg";
import family from "../../public/assets/icons/family.svg";

export const ChoosePackageSection = () => {
  return (
    <div className="container">
      <SectionHeading heading="Scegli il tuo SIRE" />
      {/*  */}
      <div className="row g-3 justify-content-around mt-5">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card box-shadow border-0" style={{height:'900px'}}>
            {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
            <Image src={direct} alt="direct-icon" className="img-fluid" />
            <div className="card-body">
              <p className="sub-heading-3 heading-text-color fw-600 ">S.I.R.E Direct</p>
              <div className="icon-image">
                <ul className="secondary-text-color description-text icon-image">
                  <li>Sistema Plugin</li>
                  <li>Struttura meccanizzata in poliuera e sensoristica intelligente</li>
                  <li>Pannelli alta efficienza da 1KW</li>
                  <li>Inverter e conne ssione aII'impianto domestico</li>
                  <li>App di controllo e gesti one</li>
                </ul>
              </div>
              <p className="fw-600 description-text primary-text-color">CONSIGLIATO PER:</p>
            
            <div className="d-flex" style={{ gap: "50px" }}>
              <div className="light-background p-3 rounded-5">
                <Image src={batterLife} alt="battery-life" width={30} height={30} />
              </div>
              <div className="light-background p-3 rounded-5">
                <Image src={family} alt="family" width={30} height={30} />
              </div>
            </div>
            <p className="fw-600 description-text primary-text-color mt-2">
              Scopri le caratteristiche tecniche
            </p>
            <ul className="secondary-text-color description-text">
              <li>Te mpo di ricarica medio in estate</li>
              <li>TBD Tempo di scarica a 16A.</li>
              <li>TBD Autonomia dalla rete elettrica.</li>
              <li>TBD Autonomia in casa di blackout.</li>
              <li>2gg Immissione di CO2 da 1.022 kg a SOO kg annui</li>
              <li>Te mpo di ricarica medio in estate.</li>
            </ul>
            </div>
          </div>
        </div>


        <div className="col-lg-6 col-md-6 col-sm-12" >
          <div className="card box-shadow border-0" style={{height:'900px'}}>
            {/* <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}
            <Image src={full} alt="full" className="img-fluid" />
            <div className="card-body">
              <p className="sub-heading-3 heading-text-color fw-600 ">S.I.R.E Full</p>
              <div className="icon-image">
                <ul className="secondary-text-color description-text icon-image">
              
                  <li>Struttura meccanizzata in poliuera e sensoristica intelligente</li>
                  <li>Pannelli alta efficienza da 1KW</li>
                  <li>Inverter e conne ssione aII'impianto domestico</li>
                  <li>App di controllo e gesti one</li>
                </ul>
              </div>
              <p className="fw-600 description-text primary-text-color">CONSIGLIATO PER:</p>
            
            <div className="d-flex" style={{ gap: "50px" }}>
              <div className="light-background p-3 rounded-5">
                <Image src={batterLife} alt="battery-life" width={30} height={30} />
              </div>
              <div className="light-background p-3 rounded-5">
                <Image src={family} alt="family" width={30} height={30} />
              </div>
            </div>
            <p className="fw-600 description-text primary-text-color mt-2">
              Scopri le caratteristiche tecniche
            </p>
            <ul className="secondary-text-color description-text">
              <li>Siste ma 2 kW con accumuIo.</li>
              <li>Tempo di ricarica medio in estate is 5 ore e 30 minuti</li>
              <li>Te mpo di scarica a 16A is 8 ore.</li>
              <li>Autonomia dalla rete eIettrica 62Po.</li>
            </ul>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};
