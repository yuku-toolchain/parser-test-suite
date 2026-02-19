const duration = {
  hours: 1,
  minutes: 22,
  seconds: 33,
  milliseconds: 111,
  microseconds: 222,
  nanoseconds: 333
};
const style = "digital";
const df = new Intl.DurationFormat("en", {
  style,
  fractionalDigits: 0
});
const dfMilli = new Intl.DurationFormat("en", {
  style,
  fractionalDigits: 3
});
const dfFourDigits = new Intl.DurationFormat("en", {
  style,
  fractionalDigits: 4
});
const dfMicro = new Intl.DurationFormat("en", {
  style,
  fractionalDigits: 6
});
const dfEightDigits = new Intl.DurationFormat("en", {
  style,
  fractionalDigits: 8
});
const dfNano = new Intl.DurationFormat("en", {
  style,
  fractionalDigits: 9
});