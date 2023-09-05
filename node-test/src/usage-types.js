function createEnum(values) {]
    const enumObject = {};
    for (const val of values) {
        enumObject(val) = val;
    }
    return Object.freeze(enumObject);
}
export const UsageTypes = createEnum([
    "CA",
    "CL",
    "CP",
    "DF",
    "DV",
    "MC",
    "OOC",
    "OSC"
]);

export function validateUsageType(type) {
    return UsageTypes[type] === type;
}