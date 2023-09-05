import { Device, Endpoint, InEndpoint, Interface, Transfer } from "usb";
const ERRORS = {
  DEVICE_NOT_READY: "Device not ready",
  DEVICE_NOT_FOUND: "Device not found",
  INTERFACE_NOT_READY: "Interface not ready",
  ENDPOINT_NOT_READY: "Endpoint not ready",
  TRANSFER_NOT_READY: "Transfer not ready",
  POLLING_ON_INENDPOINT: "Cannot poll an InEndpoint"
}

class USBModel {
  private _device: Device|undefined = undefined;
  private _interface: Interface|undefined = undefined;
  private _dataEndpoint: InEndpoint|undefined = undefined;
  private _transfer: Transfer|undefined = undefined;
  private _detached: boolean = false;

  public get device(): Device {
    return this.getAnything(this._device, ERRORS.DEVICE_NOT_READY)
  }
  public set device(device: Device | undefined) {
    if (!device) {
      throw ERRORS.DEVICE_NOT_FOUND;
    }
    this._device = device;
  }
  public get interface(): Interface {
    return this.getAnything(this._interface, ERRORS.INTERFACE_NOT_READY)
  }
  public set interface(usbInterface: Interface|undefined) {
    this._interface = usbInterface;
  }
  public get dataEndpoint(): InEndpoint {
    return this.getAnything(this._dataEndpoint, ERRORS.ENDPOINT_NOT_READY)
  }
  public set dataEndpoint(endpoint: Endpoint|undefined) {
    if(endpoint) {
      if ((typeof endpoint !== typeof InEndpoint)) {
        throw new Error("dataEndpoint not InEndpoint");
      }
      this._dataEndpoint = endpoint as InEndpoint; //casting is odd in TS!

    }
  }
  public get transfer(): Transfer {
    return this.getAnything(this._transfer, ERRORS.TRANSFER_NOT_READY)
  }
  public set transfer(transfer: Transfer|undefined) {
    this._transfer = transfer;
  }
  public get detached(): boolean {
    return this._detached;
  }
  public set detached(detached: boolean) {
    this._detached = detached;
  }
  private getAnything(value: any, error: string) {
    if (!value) {
      throw new Error(error);
    }
    return value;
  }
  constructor() {
  }
}
export default USBModel;
