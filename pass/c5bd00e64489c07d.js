const expected = ["get options.fractionalSecondDigits", "get options.fractionalSecondDigits.toString", "call options.fractionalSecondDigits.toString", "get options.roundingMode", "get options.roundingMode.toString", "call options.roundingMode.toString", "get options.smallestUnit", "get options.smallestUnit.toString", "call options.smallestUnit.toString"];
const actual = [];
const options = TemporalHelpers.propertyBagObserver(actual, {
  smallestUnit: "month",
  fractionalSecondDigits: "auto",
  roundingMode: "expand"
}, "options");
const instance = new Temporal.PlainTime(12);