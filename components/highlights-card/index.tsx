import Image from "next/image";

export const HighlightsCard = ({ item }: any) => {
  return (
    <div className="col-md-6 col-sm-12 col-lg-4 mt-4" key={item?.heading}>
      <div className=" text-center py-4 box-shadow px-2 rounded-3" style={{height:'350px'}}>
        <Image src={item?.icon} alt={`icon-${item?.icon}`} width={70} className="mb-2" />
        <p className="sub-heading-3 fw-600">{item?.heading}</p>
        <p className="description-text ">{item?.description}</p>
      </div>
    </div>
  );
};
