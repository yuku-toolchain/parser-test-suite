const usDayPeriodSpace = new Intl.DateTimeFormat('en-US', {
  timeStyle: 'short'
}).formatRangeToParts(0, 86400).find((part, i, parts) => part.type === 'literal' && parts[i + 1].type === 'dayPeriod')?.value || '';
const usDateRangeSeparator = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'short'
}).formatRangeToParts(1 * 86400 * 1000, 366 * 86400 * 1000).find(part => part.type === 'literal' && part.source === 'shared').value;
const formatter = new Intl.DateTimeFormat('en-US', {
  timeZone: 'Pacific/Apia'
});
const date1 = new Temporal.PlainDate(2021, 8, 4);
const date2 = new Temporal.PlainDate(2021, 8, 5);
const dateResult = formatter.formatRangeToParts(date1, date2);
const datetime1 = new Temporal.PlainDateTime(2021, 8, 4, 0, 30, 45, 123, 456, 789);
const datetime2 = new Temporal.PlainDateTime(2021, 8, 4, 23, 30, 45, 123, 456, 789);
const datetimeResult = formatter.formatRangeToParts(datetime1, datetime2);
const monthDay1 = new Temporal.PlainMonthDay(8, 4, "gregory");
const monthDay2 = new Temporal.PlainMonthDay(8, 5, "gregory");
const monthDayResult = formatter.formatRangeToParts(monthDay1, monthDay2);
const time1 = new Temporal.PlainTime(0, 30, 45, 123, 456, 789);
const time2 = new Temporal.PlainTime(23, 30, 45, 123, 456, 789);
const timeResult = formatter.formatRangeToParts(time1, time2);
const month1 = new Temporal.PlainYearMonth(2021, 8, "gregory");
const month2 = new Temporal.PlainYearMonth(2021, 9, "gregory");
const monthResult = formatter.formatRangeToParts(month1, month2);