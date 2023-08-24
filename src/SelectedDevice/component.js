import { Card, Col, Row } from "react-bootstrap";
function formatAsHex(value = 0) {
  var _str = Number(value).toString(16);
  if (_str.length % 2 > 0) {
    _str = '0' + _str;
  }
  return _str;
}
function SelectedDevice({ device }) {
  return (
    <Card>
      <Card.Header>
        <Card.Title>{device?.product}</Card.Title>
        <Card.Subtitle>{device?.manufacturer}</Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <dl>
          <Row>
            <Col>
              <dt>Serial #</dt><dd>{device?.serialNumber || <i>Not Specified</i>}</dd>
              <dt>Path</dt><dd>{device?.path}</dd>
              <dt>Interface</dt><dd>{device?.interface}</dd>
              <dt>Release</dt><dd>{device?.release}</dd>
            </Col>
            <Col>
              <dt>Usage</dt><dd>0x{formatAsHex((device?.usagePage << 8) | device?.usage)}</dd>
              <dt>VendorID</dt><dd>{device?.vendorId} (0x{formatAsHex(device?.vendorId)})</dd>
              <dt>ProductID</dt><dd>{device?.productId} (0x{formatAsHex(device?.productId)})</dd>
            </Col>
          </Row>
        </dl>
      </Card.Body>
    </Card>
  );
}

export default SelectedDevice;