const monthDay = new Temporal.PlainMonthDay(8, 4, "gregory");
const result = monthDay.toLocaleString("en", {
  timeZone: "Pacific/Apia"
});