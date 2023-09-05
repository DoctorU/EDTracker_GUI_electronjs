import { Interface, LibUSBException } from "usb";
import * as usb from 'usb';
import USBModel from "./usbModel.class";

const pid = 0x0aec;
const vid = 0x16d0;
const deviceAddress = 0x04; //for now...
const commandEndpointAddr = 0x00; // OutEndpoint - doesn't exist!
const DATA_ENDPOINT = 129; // 0x81 - InEndpoint
const TIMEOUT = 1000;

class USBTracker {
  callback = function (err: LibUSBException | undefined, buff: Buffer, len: number) {
    console.log('callback', err, buff, len);
    return new Promise((resolve, reject) => {
      if (err) {
        reject(err);
      } else {
        resolve(buff.subarray(0, len));
      }
    });
  };

  usbDevice: USBModel;

  constructor() {
    this.usbDevice = new USBModel();
  }

  async initDevice() {
    this.usbDevice.device = usb.findByIds(vid, pid);
    return this.usbDevice.device;
  }

  async attach() {
    this.usbDevice.device.open();
    return this.usbDevice.device;
  }


  async findInterface() {
    var _interface: Interface | undefined = this.usbDevice.device.interfaces ? this.usbDevice.device.interfaces[0] : undefined;
    this.usbDevice.interface = _interface;
    return this.usbDevice.interface;
  }
  async claimInterface() {
    if (this.usbDevice.interface.isKernelDriverActive()) {
      await this.usbDevice.interface.detachKernelDriver();
      this.usbDevice.detached = true;
    }
    await this.usbDevice.interface.claim();
    return this.usbDevice.interface;
  }
  async returnInterface() {
    if (!this.usbDevice.detached) {
      await this.usbDevice.interface.attachKernelDriver();
    }
    this.usbDevice.interface.release();
    return this.usbDevice.interface;
  }
  async createEndpoint() {
    const endpoints = this.usbDevice.interface.endpoints;
    this.usbDevice.dataEndpoint = endpoints.find((ep) => ep.address === DATA_ENDPOINT);
    return this.usbDevice.dataEndpoint;
  }
  async initTransfer() {
    this.usbDevice.transfer = await this.usbDevice.dataEndpoint.makeTransfer(TIMEOUT, this.callback);
    return this.usbDevice.transfer;
  }
  async doTransfer(buffer: Buffer) {
    const data = await this.usbDevice.transfer.submit(buffer, this.callback);
  }
  async startPoll(buffer: Buffer) {
    console.log(this.usbDevice.dataEndpoint.direction);
    if (this.usbDevice.dataEndpoint.direction === 'in') {
      function callback(err: LibUSBException | undefined, buff: Buffer, len: number, cancelled: boolean) {
        if (err) {
          throw err;
        }
        console.log(new Date(), buff.slice(0, len), cancelled);
        return buff.slice(0, len);
      }
      return this.usbDevice.dataEndpoint.startPoll(0xf, 10, callback);
    } else {
      throw "POLLING_ON_INENDPOINT";
    }
  }

  async release() {
    console.group('Release::')
    try {
      await this.returnInterface();
    } catch (error:any) {
      console.warn(error.message);
    }
    try {
      await this.usbDevice.device?.close();
    } catch (error:any) {
      console.warn(error.message);
    }
    console.groupEnd();
  }
}
const main = async () => {
  const logMe = (name:string)=> (x: any) => {
    console.group(name + '::');
    console.log(x);
    if(x.allConfigDescriptors) {
      console.group('descriptors::')
      console.log(x.allConfigDescriptors);
      console.groupEnd();
    }
    console.groupEnd();
    return x; //to allow additional processing of x
  };
  const running = async () => {
    let device: USBTracker | undefined = undefined;
    try {
      device = new USBTracker();
      // console.log(dataEndpoint);
      await device.initDevice().then(logMe('initDevice - device'));      //.then((dev)=> console.log('device',dev));
      await device.findInterface().then(logMe('findInterface (pre-attach)- interface 0'));
      await device.attach();
      await device.findInterface().then(logMe('findInterface (post-attach) - interface 0'));
      //.then((_if) => console.log('interface', _if));
      await device.claimInterface().then(logMe('claimInterface - interface 0'));
      // await device.createEndpoint().then(logMe('createEndpoint - endpoint'));
      // await device.initTransfer().then(logMe('initTransfer - transfer'));
      // .then((txfr)=> console.log('transfer', txfr));
      // console.log('Doing the transfer...');
      const buffer = Buffer.alloc(0x40);
      await device.startPoll(buffer);
      // .then((bufBack)=>{
      //   console.log('request', buffer);
      //   console.log('response', bufBack);
      // });

    } catch (Error) {
      console.log(Error);
    } finally {
      await device?.release();
    }
  }
  await running();
}

main().then(function () {
  console.log("Done");
});