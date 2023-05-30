import Image from "next/image";
import logo from "../public/assets/logo.svg";
export default function Home() {
  return (
    <main>
      <Image src={logo} alt="solar-innovio-logo " />
    </main>
  );
}
