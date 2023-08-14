

function DeviceSelector({devices}) {

  function handleSelection(evt, arg) {
    console.log('selected', evt, arg);
  }
  // devices = await window.edtrackerAPI.requestDevices();
  let options = undefined;
  console.log(JSON.stringify(devices,undefined, 2));
  if (devices) {
    options = devices.map((device)=> <option key={device.name}>{device.name} {device.manufacturer} ({device.path})</option>);
  }
  if(devices === undefined) {
    return (<div >Waiting for devices...</div>);
  }
  else {
    return (
      <select onSelect={(e) => handleSelection(e)}>
        <option value=''> Select a device...</option>
        {options}
      </select>
    );
  }
}

export default DeviceSelector;