import { useState, useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import DeviceSelector from '../DeviceSelector/component';
import SelectedDevice from '../SelectedDevice/component';
import { handleConnect, handleDisconnect, handleForm, handleHello, handleRefresh } from './handlers';

function DeviceManager() {
  const [devices, setDevices] = useState([]);
  const [selected, setSelection] = useState({ device: {}, i: -1 });
  function fetchDevices() {
    window.electronAPI.requestDevices().then((indevices) => setDevices(indevices));
  }

  useEffect(() => {
    fetchDevices();
  }, []);
  function handleSelect(device, idx) {
    console.log("handleSelect", device, idx);
    const selection = { device: device, i: idx };
    console.log('selection', selection)
      setSelection(selection);

    
  }


  return (
    <div className='devices'>
      <Row>
        <Col>
          <DeviceSelector devices={devices} handleSelect={handleSelect} />
        </Col>
        <Col>
          <SelectedDevice device={selected.device} />
        </Col>
      </Row>


      <Form onSubmit={handleForm}>
        <Form.Group className='buttons'>
          <Button value='V' onClick={handleConnect}>Connect</Button>
          <Button value='S' onClick={handleDisconnect}>Pop One</Button>
          <Button value='H' onClick={handleHello}>Hello</Button>
          <Button value='refresh' onClick={handleRefresh}>Refresh Device List</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default DeviceManager;