import DeviceManager from '../DeviceManager/component'
import Calibration from '../Calibration/component'
import ThreeDRender from '../ThreeDRender/component'

function GuiLayout() {
  return (
    <div id='gui-layout'>
      <div id='left-column'>
        <DeviceManager>
        </DeviceManager>
        <Calibration>
        </Calibration> 
      </div>
      <div id='right-column'>
        <ThreeDRender></ThreeDRender>
      </div>
    </div>
  );
};
export default GuiLayout;