import React from "react";
import { Poppins } from "next/font/google";
import { UserCard } from "../../components/user-card";
import dottedSquare from "../../public/assets/dotted-square.svg";
import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export const TeamDetails = (props: any) => {
  const { data } = props;
  return (
    <div className={`${poppins.className}`}>
      <section className="container-fluid position-relative">
        <Image
          src={dottedSquare}
          alt="square"
          className="position-absolute"
          style={{ left: 50, top: 30 }}
        />
        <div className="text-center container">
          <SectionHeading heading={"CHI SIAMO"} />
          <p className="mt-5 sub-heading">
            Solar Innovatio è una PMI innovativa italiana specializzata nella progettazione e
            realizzazione di sistemi fotovoltaici intelligenti. Solar Innovatio unisce alla
            decennale esperienza maturata nel panorama italiano nell'ambito delle soluzioni
            fotovoltaiche un approccio ingegneristico, innovativo, digitale alla principale fonte di
            energia rinnovabile.
          </p>
        </div>
      </section>

      <section className="container">
        <div className="mx-sm-0 mx-lg-4 row container" style={{ marginTop: "150px" }}>
          {data?.map((item: any) => {
            return (
              <UserCard
                userImage={item?.userImage}
                userName={item?.userName}
                userData={item?.userData}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};
