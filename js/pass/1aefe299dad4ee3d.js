var from = new Temporal.PlainDateTime(1970, 1, 1);
var to = new Temporal.PlainDateTime(1971, 1, 1);
var options = {
  roundingIncrement: 100_000_000,
  smallestUnit: "months"
};