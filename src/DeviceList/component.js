import { ListGroup } from "react-bootstrap";


function DeviceList({devices, filter=()=>true, handleSelect}) {
  const _devices = devices.filter(filter);

  return (
    <ListGroup>
      {_devices.map((device, idx)=>
        <ListGroup.Item key={idx} onClick={(e) => handleSelect(device, idx)}>{device.product} {device.serialNumber}</ListGroup.Item>
      )}
    </ListGroup>
  )
}


export default DeviceList;
