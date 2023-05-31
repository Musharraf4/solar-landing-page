import Accordion from "react-bootstrap/Accordion";

export const AppAccordian = (props:any) => {
  const {data} =props;
  return (
    <Accordion flush key={data?.key}>
    <Accordion.Item eventKey={data?.key} className="my-2 box-shadow rounded-2">
      <Accordion.Header>{data?.heading}</Accordion.Header>
      <Accordion.Body>
      {data?.body} 
      </Accordion.Body>
    </Accordion.Item>
  </Accordion>
  )
}
