const durationNano = {
  hours: 1,
  minutes: 22,
  seconds: 33,
  milliseconds: 111,
  microseconds: 222,
  nanoseconds: 333
};
const durationMicro = {
  hours: 1,
  minutes: 22,
  seconds: 33,
  milliseconds: 111,
  microseconds: 222
};
const durationMilli = {
  hours: 1,
  minutes: 22,
  seconds: 33,
  milliseconds: 111
};
const durationNoSubsecond = {
  hours: 1,
  minutes: 22,
  seconds: 33
};
const durationFiveFractional = {
  hours: 2,
  minutes: 30,
  seconds: 10,
  milliseconds: 111,
  microseconds: 220
};
const durationSevenFractional = {
  hours: 2,
  minutes: 30,
  seconds: 10,
  milliseconds: 111,
  microseconds: 220,
  nanoseconds: 300
};
const style = "digital";
const df = new Intl.DurationFormat("en", {
  style,
  fractionalDigits: undefined
});