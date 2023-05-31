"use client";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";
import phone from "../../public/assets/icons/phone.svg";
import mail from "../../public/assets/icons/mail.svg";
import { MainImage } from "@/components/main-image";
import { navList } from "@/mock-data/mock-data";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <div>
      <Navbar className="container px-2" expand="lg">
        <Navbar.Brand href="#">
          {" "}
          <Image
            src={logo}
            alt="solarinnovatio
"
            className="nav me-auto"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">
              <a href="#" className="nav-link nav-text-color  d-flex gap-3 mt-2 ms-2">
                <Image src={phone} alt="phone" />
                <p>0203 519 4420</p>
              </a>
            </Nav.Link>
            <Nav.Link href="#link">
              <a href="#" className="nav-link nav-text-color  d-flex gap-3 mt-2 ms-2">
                <Image src={mail} alt="mail" />
                <p>info@solarinnovatio.com</p>
              </a>
            </Nav.Link>
            <Nav.Link href="#link">
              <a href="#" className="nav-link nav-text-color  ms-2 ">
                <button className="btn bg-primary-color text-white ">Contact Us</button>
              </a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container">
        <ul className="d-flex justify-content-around nav">
          {navList?.map((item: string) => {
            return (
              <li className="nav-item" key={item}>
                <a href="#" className="nav-link nav-text-color">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <MainImage />
    </div>
  );
};
