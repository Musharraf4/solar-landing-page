"use client";
import { AppAccordian } from "@/components/accordian";
import { SectionHeading } from "@/components/section-heading";
import { accordianData } from "@/mock-data/mock-data";

export const QuestionSection = () => {
  return (
    <div className="container my-5">
<SectionHeading heading="Frequently Asked Questions"/>
    <div className="my-5">
{accordianData?.map((item:any)=>{
  return( 

<AppAccordian data={item}/>
  )
})}
    </div>
    </div>

  );
};
