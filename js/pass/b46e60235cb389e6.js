const instance = new Temporal.PlainYearMonth(2019, 6);
const calendar = "iso8601";
const arg = {
  year: 2019,
  monthCode: "M06",
  calendar
};
const result = instance.equals(arg);