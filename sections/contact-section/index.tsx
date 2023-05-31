import Image from "next/image";
import square from "../../public/assets/dotted-square.svg";
import { SectionHeading } from "@/components/section-heading";
import location from "../../public/assets/icons/location.svg";
import mail from "../../public/assets/icons/mail.svg";
import phone from "../../public/assets/icons/phone.svg";

export const ContactSection = () => {
  return (
    <div className="container my-5">
      <div className="text-center position-relative mb-5">
        <Image
          src={square}
          alt="square"
          className="position-absolute"
          style={{ left: 50, top: 30 }}
        />
        <button className="btn bg-primary-color text-white ">Collegati al sole</button>
      </div>
      <SectionHeading heading="CONTATTACI" />

      <div className="row g-3 my-5">
        <div className=" col-lg-4 col-sm-12">
          <div className="card">

          <div className="card-body">
            <div className="d-flex gap-3 my-2">
              <Image src={location} alt="location" />
              <p className="secondary-text-color description-text">
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci
              </p>
            </div>
            <div className="d-flex gap-3 my-2">
              <Image src={mail} alt="location" className="mt-2" />
              <p className="secondary-text-color description-text">
                email@email.com
                <br />
                support@email.com
              </p>
            </div>
            <div className="d-flex gap-3 my-2">
              <Image src={phone} alt="location" />
              <p className="secondary-text-color description-text">+29 98595 8998</p>
            </div>
            <hr />
            <p className="primary-text-color description-text">
              We Will get back to you within 24 hours. Or Call us Now
            </p>
          </div>
          </div>
        </div>
        <div className="col-lg-8 col-sm-12">
          <div className="card h-100">

          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-6 col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  aria-label="First name"
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  aria-label="Last name"
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                />
              </div>
              <div className="mb-3 col-12">
                <textarea
                  placeholder="Message"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={3}
                ></textarea>
              </div>
            </div>
            <div className="text-end">

            <button className="btn bg-primary-color text-white ">SEND</button>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
