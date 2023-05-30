import React from "react";
import Image from "next/image";
import logo from "../../public/assets/logo.svg";

export const Navbar = () => {
  return (
    <section>
      <Image src={logo} alt="solar-innovio-logo " />
    </section>
  );
};
