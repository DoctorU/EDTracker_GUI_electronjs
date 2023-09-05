// Source: https://www.usb.org/sites/default/files/hut1_3_0.pdf
import { validateUsageType } from "./usage-types";
import UsageTypes from "./usage-types";
const Undefined = createUsage (undefined, "Undefined", undefined);
const Reserved = createUsage(undefined, "Reserved", undefined);
function copyUsageToId(usage, id) {
    const newUsage = Object.assign(usage);
    newUsage.id = id;
    return Object.freeze(newUsage);
}
function createUsage (id, name, types) {
    //validate usagetypes:
    for (const type in types) {
        UsageTypes.validateType(type);
    }
    return {
        "id": id, //integer
        "name": name, //string
        "types": types //UsageType
    };
}
function createUsageWithSingleType (id, name, type) {
    return createUsage (id, name, [type]);
}
function createUsages () {
    const usagesObj = {};
    usagesObj['00'] = copyUsageToId(Undefined, 0);
    usagesObj['01']= createUsageWithSingleType(1, 'Pointer', UsageTypes.CP);
    usagesObj['02']= createUsageWithSingleType(2, 'Mouse', UsageTypes.CA);
    usagesObj['03'] = copyUsageToId(Reserved, 0);
    usagesObj['04']= createUsageWithSingleType(1, 'Joystick', UsageTypes.CA);
    for (int i =0x14; i <= 0x2f; i++) {
        usagesObj[""+i] = copyUsageToId(Reserved, i);
    }
    return Object.freeze(usagesObj);
}
const Usages = createUsages ();
export default Usages;
export function lookupUsage(id) {
    if (id === undefined) {
        throw "id not defined";
    }
    const hexString = id.toString(16);
    return Usages[id];
}