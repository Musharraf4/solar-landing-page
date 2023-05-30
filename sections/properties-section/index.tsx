import React from "react";
import "./index.css";
import Image from "next/image";

export const PropertiesSection = (props: any) => {
  const { heading, data } = props;
  return (
    <div className=" main-img border">
      <div className="text-center">
        <span className="fw-600 primary-heading underline py-3">{heading}</span>
      </div>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 mx-2">
        {data?.map((item:any)=>{
          return (
        <div className="col d-flex align-items-start">
          <div className=" me-3 icon-border p-2 rounded-5">
            {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg> */}
            <Image src={item?.image} alt="efficiency" width={30} />
          </div>
          <div>
            <p className="heading-1">{item?.heading}</p>
            <p className="sub-heading">{item?.description}</p>
          </div>
        </div>)
        })}
      </div>
    </div>
  );
};
