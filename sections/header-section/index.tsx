import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import PhoneIcon from "../../public/assets/icons/phone-icon.png"
import MailIcon from "../../public/assets/icons/mail-icon.png"
import { MainImage } from "@/components/main-image";

export const Header = () => {
  return (
    <header>
    <div className="d-flex align-items-center justify-content-between mx-5 p-2 px-5">
      <Image src={logo} alt="solar-innovio-logo " />
      <div className="d-flex align-items-center justify-content-between">
        <span className="" style={{ color: "#8A8888", fontSize: "16px", marginTop: "10px" }}><Image src={PhoneIcon} alt="phone-icon" /><span className="mx-4">0203 519 4420</span></span>
        <span className="mx-3" style={{ color: "#8A8888", fontSize: "16px", marginTop: "10px" }}><Image src={MailIcon} alt="mail-icon" /><span className="mx-4">info@solarinnovatio.com</span></span>
        <button className="btn navbar-btn" style={{ backgroundColor: "#86BE3F", color: "#FFFFFF" }}>Contact Us</button>
      </div>
    </div>
    <hr style={{ border: "1px solid #F3EDED" }} />
    <ul className=" d-flex align-items-center justify-content-between mx-5 p-2 px-5" style={{ listStyleType: "none" }}>
      <li className="nav-li" style={{ color: "#86BE3F" }}>
        Home
      </li>
      <li className="nav-li">
        Chi Siamo
      </li>

      <li className="nav-li">
        S.I.R.E
      </li>

      <li className="nav-li">
        SIRE Features
      </li>

      <li className="nav-li">
        SIRE Product
      </li>
      <li className="nav-li">
        How it Works?
      </li>
    </ul>
    <MainImage/>
  </header>
  )
}
