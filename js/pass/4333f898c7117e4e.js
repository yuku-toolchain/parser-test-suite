var expectedDayPeriods = ['in the morning', 'noon', 'in the afternoon', 'in the evening', 'at night'];
var inputs = [];
for (var h = 0; h < 24; h++) {
  inputs.push(new Date(2017, 11, 12, h, 0, 0, 0));
}
var formatter = new Intl.DateTimeFormat('en', {
  dayPeriod: 'long'
});
function assertParts(parts, message) {}
var observedDayPeriods = [];
var unexpectedDayPeriods = [];
for (var h = 0; h < 24; h++) {
  var parts = formatter.formatToParts(inputs[h]);
  assertParts(parts, 'dayPeriod-only formatting for ' + inputs[h]);
  var dayPeriod = parts[0].value;
  observedDayPeriods.push(dayPeriod);
  if (expectedDayPeriods.indexOf(dayPeriod) === -1) {
    unexpectedDayPeriods.push(dayPeriod);
  }
}
var unusedDayPeriods = expectedDayPeriods.filter(function (dayPeriod) {
  return observedDayPeriods.indexOf(dayPeriod) === -1;
});
function arrayAt(arr, relIndex) {
  var realIndex = relIndex < 0 ? arr.length + relIndex : relIndex;
  if (realIndex < 0 || realIndex >= arr.length) return undefined;
  return arr[realIndex];
}
var transitionCount = 0;
for (var h = 0; h < 24; h++) {
  var dayPeriod = observedDayPeriods[h];
  var prevDayPeriod = arrayAt(observedDayPeriods, h - 1);
  if (dayPeriod === prevDayPeriod) continue;
  transitionCount++;
  var i = expectedDayPeriods.indexOf(dayPeriod);
}
var numericFormatter = new Intl.DateTimeFormat('en', {
  dayPeriod: 'long',
  hour: 'numeric'
});
function assertPartsNumeric(parts, hour, expected, message) {}
for (var h = 0; h < 24; h++) {
  assertPartsNumeric(numericFormatter.formatToParts(inputs[h]), String(h % 12 || 12), observedDayPeriods[h], 'numeric hour must precede dayPeriod');
}