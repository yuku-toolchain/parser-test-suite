const usDayPeriodSpace = new Intl.DateTimeFormat("en-US", {
  timeStyle: "short"
}).formatToParts(0).find((part, i, parts) => part.type === "literal" && parts[i + 1].type === "dayPeriod")?.value || "";
const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "Pacific/Apia"
});
const date = new Temporal.PlainDate(2021, 8, 4);
const dateResult = formatter.format(date);
const datetime1 = new Temporal.PlainDateTime(2021, 8, 4, 0, 30, 45, 123, 456, 789);
const datetimeResult1 = formatter.format(datetime1);
const datetime2 = new Temporal.PlainDateTime(2021, 8, 4, 23, 30, 45, 123, 456, 789);
const datetimeResult2 = formatter.format(datetime2);
const monthDay = new Temporal.PlainMonthDay(8, 4, "gregory");
const monthDayResult = formatter.format(monthDay);
const time1 = new Temporal.PlainTime(0, 30, 45, 123, 456, 789);
const timeResult1 = formatter.format(time1);
const time2 = new Temporal.PlainTime(23, 30, 45, 123, 456, 789);
const timeResult2 = formatter.format(time2);
const month = new Temporal.PlainYearMonth(2021, 8, "gregory");
const monthResult = formatter.format(month);