import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import phone from "../../public/assets/icons/phone.svg";
import mail from "../../public/assets/icons/mail.svg";
import { MainImage } from "@/components/main-image";

export const Header = () => {
  return (
    <header>
      <nav className="py-2 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <div className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
            <Image
              src={logo}
              alt="solarinnovatio
"
              className="nav me-auto"
            />
          </div>

          <div className=" col-12 col-lg-auto">
            <ul className="nav d-flex align-items-center justify-content-center">
              <li className="nav-item pt-2">
                <a href="#" className="nav-link nav-text-color  d-flex gap-3">
                  <Image src={phone} alt="phone" />
                  <p>0203 519 4420</p>
                </a>
              </li>
              <li className="nav-item pt-2">
                <a href="#" className="nav-link nav-text-color  d-flex gap-3">
                  <Image src={mail} alt="mail" />
                  <p>info@solarinnovatio.com</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link nav-text-color  d-flex gap-3">
                  <button className="btn bg-primary-color text-white ">Contact Us</button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <ul className="d-flex justify-content-around nav">
          <li className="nav-item">
            <a href="#" className="nav-link heading-text-color">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link nav-text-color">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link nav-text-color">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link nav-text-color">
              FAQs
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link nav-text-color">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link nav-text-color">
              About
            </a>
          </li>
        </ul>
      </div>
      <MainImage />
    </header>
  );
};
