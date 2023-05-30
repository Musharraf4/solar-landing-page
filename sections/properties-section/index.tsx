import React from "react";
import "./index.css";
import { FeaturesDetailCard } from "@/components/features-detail-card";
import { SectionHeading } from "@/components/section-heading";

export const PropertiesSection = (props: any) => {
  const { heading, data } = props;
  return (
    <div className="container-fluid main-img">
      <div className="container py-3">
      <SectionHeading heading={heading}/>
        <div className="row mx-2 mt-5">
          {data?.map((item: any) => {
            return <FeaturesDetailCard item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};
