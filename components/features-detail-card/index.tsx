import Image from "next/image";

export const FeaturesDetailCard = (props:any) => {
  const {item}=props;
  return (
    <div className="col-md-6 col-sm-12 d-flex align-items-start">
          <div className=" me-3 icon-border p-2 rounded-5">
            {/* <svg className="bi" width="1em" height="1em"><use xlink:href="#toggles2"/></svg> */}
            <Image src={item?.image} alt="efficiency" width={30} />
          </div>
          <div>
            <p className="heading-1">{item?.heading}</p>
            <p className="sub-heading">{item?.description}</p>
          </div>
        </div>
  )
}
