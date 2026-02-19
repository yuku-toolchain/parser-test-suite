const options = {
  timeZone: "Pacific/Apia",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hourCycle: "h23"
};
const time1 = new Temporal.PlainTime(0, 30, 45, 123, 456, 789);
const result1 = time1.toLocaleString("en", options);
const time2 = new Temporal.PlainTime(23, 30, 45, 123, 456, 789);
const result2 = time2.toLocaleString("en", options);