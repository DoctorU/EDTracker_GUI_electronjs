import {lookupUsage} from "../src/generic-desktop-page";

function testVal(value) {
    console.log(JSON.stringify(value, undefined, 2));
}
testVal(lookupUsage(undefined));
testVal(lookupUsage(1));
testVal(lookupUsage("01"));