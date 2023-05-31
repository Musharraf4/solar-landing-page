import Image from "next/image";
import "./index.css";
import send from "../../public/assets/icons/send.svg";
import whiteLogo from "../../public/assets/logo-white.svg";
import freyLogo from "../../public/assets/frey-logo.svg";
import mail from "../../public/assets/icons/white-mail.svg";
import location from "../../public/assets/icons/white-location.svg";
import phone from "../../public/assets/icons/white-phone.svg";
import fb from "../../public/assets/icons/fb.svg";
import insta from "../../public/assets/icons/insta.svg";
import twitter from "../../public/assets/icons/twitter.svg";

export const FooterSection = () => {
  return (
    <>
      <div className="container-fluid bg-green text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-sm-12">
              <p className="sub-heading-3 fw-600 pt-3">Subscribe for Newsletter</p>
              <p className="description-text">
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci maecenas
                tortor odio
              </p>
            </div>

            <div className=" col-md-6 col-sm-12">
              <div className="input-group border-0">
                <input
                  type="email"
                  className="form-control rounded-5 position-relative"
                  placeholder="Inserisci la tua email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                />
                <button
                  className="input-group-text bg-primary-color rounded-5 position-absolute"
                  style={{ border: "2px solid white", right: 2, padding: "10px" }}
                  id="basic-addon1"
                >
                  <Image alt="send" src={send} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* main footer */}
      <div className="container-fluid text-white" style={{ backgroundColor: "#4D4D4D" }}>
   
        <div className="container">
          <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5">
            <div className="col mb-3">
              <Image src={whiteLogo} alt="white-logo" />
              <p className="text-white description-text">
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci maecenas
                tortor odio Leo dui fermentum tristique urna tellus eget amet aliquam.
              </p>
              <Image src={freyLogo} alt="white-logo" />
              <Image src={freyLogo} alt="white-logo" />
              <Image src={freyLogo} alt="white-logo" />
              <Image src={freyLogo} alt="white-logo" />
              <Image src={freyLogo} alt="white-logo" />
              <Image src={freyLogo} alt="white-logo" />
            </div>

            <div className="col mb-3"></div>

            <div className="col mb-3">
              <p className="fw-600 description-text">Quick Links</p>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Home
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Chi Siamo
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    S.I.R.E
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    SIRE Features
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Why SIRE?
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    SIRE Product
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    How it Works?
                  </a>
                </li>
              </ul>
            </div>

            <div className="col mb-3">
              <p className="fw-600 description-text">Useful Links</p>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Help Center
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Privacy Policy
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    Terms & Condition
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    FAQ
                  </a>
                </li>
              </ul>
              <p className="fw-600 description-text mt-2">Documents</p>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white text-decoration-underline">
                    Linked Here
                  </a>
                </li>
              </ul>
            </div>

            <div className="col mb-3">
              <p className="fw-600 description-text">Contact Us</p>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    <div className="d-flex gap-3 my-2">
                      <Image src={location} alt="location" className="mt-2" />
                      <p className=" text-white secondary-text-color description-text">
                        Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae orci
                      </p>
                    </div>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    <div className="d-flex gap-3 my-2">
                      <Image src={mail} alt="location" className="mt-2" />
                      <p className=" text-white secondary-text-color description-text">
                        email@email.com
                        <br />
                        support@email.com
                      </p>
                    </div>
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-white">
                    <div className="d-flex gap-3 ">
                      <Image src={phone} alt="location" />
                      <p className=" text-white secondary-text-color description-text">
                        +29 98595 8998
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
              <hr/>
              <div className="d-flex justify-content-between pb-2">
<div>

              <span>All Rights Reserved</span>
</div>
<div className="d-flex gap-3">
<Image src={fb} alt="fb"/>
<Image src={insta} alt="insta"/>
<Image src={twitter} alt="twitter"/>
</div>

              </div>
        </div>
      </div>
    </>
  );
};
