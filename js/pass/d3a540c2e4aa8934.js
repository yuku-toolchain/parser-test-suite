const month = new Temporal.PlainYearMonth(2021, 8, "gregory");
const result = month.toLocaleString("en", {
  timeZone: "Pacific/Apia"
});