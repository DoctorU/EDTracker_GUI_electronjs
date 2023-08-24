

function DeviceDumper({ devices }) {
  // const devices = useState();
  const jsonDevices = JSON.stringify(devices, undefined, 2);
  console.log('re-rendering:', devices ? JSON.parse(jsonDevices) : devices);
  function deviceRow(dev, idx) {
    return (
      <TableRow key='{idx}'>
        <TableCell>{dev.vendorId}</TableCell>
        <TableCell>{dev.productId}</TableCell>
        <TableCell>{dev.path}</TableCell>
        <TableCell>{dev.serialNumber}</TableCell>
        <TableCell>{dev.manufacturer}</TableCell>
        <TableCell>{dev.product}</TableCell>
        <TableCell>{dev.usagePage}</TableCell>
        <TableCell>{dev.usage}</TableCell>
      </TableRow>
    );
  }
  const devicesView = devices.map((device, idx) => deviceRow(device, idx));
  return (
    <TableContainer component={Paper}>

    <Table>
      <TableHead>
        <TableRow>
          <th>Vendor Id</th>
          <th>Product Id</th>
          <th>Path</th>
          <th>Serial #</th>
          <th>Manufacturer</th>
          <th>Product</th>
          <th>UsagePage</th>
          <th>Usage</th>
        </TableRow>
      </TableHead>
      <TableBody>
      {devicesView}
      </TableBody>
    </Table>
    </TableContainer>

  );
}


export default DeviceDumper;