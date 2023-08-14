
import DeviceSelector from "../DeviceSelector/component";
import { useState } from 'react';
// import window from 'electron';
// import API from "../API"

function DeviceManager() {
  const [devices, updateDevices] = useState(undefined);
  // const [device, setDevice] = useState(undefined);
  console.log(window.edtrackerAPI)

  if (devices === undefined) {
    window.electronAPI.requestDevices().then((devices) => {
      updateDevices(devices);
    });  
  }

  const handleForm = function (e) {
    e.preventDefault();
  }
  const handleConnect = function (e) {
    // setDevice(selectedDevice); 
    e.stopPropagation();
    console.log('connect');
  };
  const handleDisconnect = function (e) {
    e.stopPropagation();
    console.log('disconnect');
  };
  const handleHello = function (e) {
    e.stopPropagation();
    console.log('Hello');
  };
  const handleRefresh = function (e) {
    e.stopPropagation();
    console.log('Refresh');
  };
  return (
    //JSC, or whatever it's called. 
    <div className='devices'>
      <form onSubmit={handleForm}>
        <h4>DeviceSelector (devices=none)</h4>
        <DeviceSelector devices={undefined}></DeviceSelector>
        <h4>DeviceSelector (devices=set)</h4>
        <DeviceSelector devices={devices}></DeviceSelector>
        <fieldset className='buttons'>
          <button value='V' onClick={handleConnect}>Connect</button>
          <button value='S' onClick={handleDisconnect}>Disconnect</button>
          <button value='H' onClick={handleHello}>Hello</button>
          <button value='refresh' onClick={handleRefresh}>Refresh Device List</button>
        </fieldset>
      </form>
    </div>
  )
}

export default DeviceManager;