import DeviceManager from '../DeviceManager/component'
import Calibration from '../Calibration/component'
import ThreeDRender from '../ThreeDRender/component'
import { Col, Container, Row, Stack } from 'react-bootstrap';

function GuiLayout() {
  return (
    <Container id='gui-layout'>
      <Row gap={3}>
        <Col id='left-column'>
          <Stack gap={3}>
            <DeviceManager>
            </DeviceManager>

          </Stack>
        </Col>
        </Row>
        <Row>
        <Col id='right-column'>

        <Calibration>
            </Calibration>
          <Stack>
            <ThreeDRender></ThreeDRender>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};
export default GuiLayout;