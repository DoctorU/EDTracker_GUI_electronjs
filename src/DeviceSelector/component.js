import { Accordion, Spinner } from "react-bootstrap";
import DeviceList from "../DeviceList/component";

function filterManufacturer(manufacturer) {
  return function(dev) {
    return dev.manufacturer === manufacturer;
  };
}
function DeviceSelector({ devices, handleSelect }) {


  const manufacturers = devices.map((device) => device.manufacturer || 'Undefined')
    .filter((el, idx, arr) => arr.indexOf(el) === idx);
  if (devices && devices.length > 0) {
    return (
      <Accordion defaultActiveKey={0}>
        {manufacturers.map((manufacturer, idx) =>
          <Accordion.Item eventKey={idx} >
            <Accordion.Header>{manufacturer}</Accordion.Header>
            <Accordion.Body>
              <DeviceList devices={devices} filter={filterManufacturer(manufacturer)} handleSelect={handleSelect}></DeviceList>
            </Accordion.Body>
          </Accordion.Item>
        )}
      </Accordion>

    )
  } else {
    return (
      <>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <span>Loading Devices...</span>
      </>
    )

  }
}


export default DeviceSelector;