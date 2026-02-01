const validValues = [new Temporal.PlainMonthDay(5, 2), "05-02"];
validValues.forEach(value => {
  const constrain = Temporal.PlainMonthDay.from(value, {
    overflow: "constrain"
  });
  TemporalHelpers.assertPlainMonthDay(constrain, "M05", 2, "overflow is ignored: constrain");
  const reject = Temporal.PlainMonthDay.from(value, {
    overflow: "reject"
  });
  TemporalHelpers.assertPlainMonthDay(reject, "M05", 2, "overflow is ignored: reject");
});
const propertyBag1 = {
  year: 2000,
  month: 13,
  day: 34
};
const result1 = Temporal.PlainMonthDay.from(propertyBag1, {
  overflow: "constrain"
});
TemporalHelpers.assertPlainMonthDay(result1, "M12", 31, "default overflow is constrain");
const propertyBag2 = {
  month: 1,
  day: 32
};
const result2 = Temporal.PlainMonthDay.from(propertyBag2, {
  overflow: "constrain"
});
TemporalHelpers.assertPlainMonthDay(result2, "M01", 31, "default overflow is constrain");
const opt = {
  overflow: "constrain"
};
let result = Temporal.PlainMonthDay.from({
  year: 2021,
  month: 13,
  day: 1
}, opt);
TemporalHelpers.assertPlainMonthDay(result, "M12", 1, "month 13 is constrained to 12");
result = Temporal.PlainMonthDay.from({
  year: 2021,
  month: 999999,
  day: 500
}, opt);
TemporalHelpers.assertPlainMonthDay(result, "M12", 31, "month 999999 is constrained to 12 and day 500 is constrained to 31");
[-99999, -1, 0].forEach(month => {});
TemporalHelpers.ISOMonths.forEach(({month, monthCode, daysInMonth}) => {
  const day = daysInMonth + 1;
  result = Temporal.PlainMonthDay.from({
    month,
    day
  }, opt);
  TemporalHelpers.assertPlainMonthDay(result, monthCode, daysInMonth, `day is constrained from ${day} to ${daysInMonth} in month ${month}`);
  result = Temporal.PlainMonthDay.from({
    month,
    day: 9001
  }, opt);
  TemporalHelpers.assertPlainMonthDay(result, monthCode, daysInMonth, `day is constrained to ${daysInMonth} in month ${month}`);
  result = Temporal.PlainMonthDay.from({
    monthCode,
    day
  }, opt);
  TemporalHelpers.assertPlainMonthDay(result, monthCode, daysInMonth, `day is constrained from ${day} to ${daysInMonth} in monthCode ${monthCode}`);
  result = Temporal.PlainMonthDay.from({
    monthCode,
    day: 9001
  }, opt);
  TemporalHelpers.assertPlainMonthDay(result, monthCode, daysInMonth, `day is constrained to ${daysInMonth} in monthCode ${monthCode}`);
});
[["month", 2], ["monthCode", "M02"]].forEach(([name, value]) => {
  result = Temporal.PlainMonthDay.from({
    year: 2020,
    [name]: value,
    day: 30
  }, opt);
  TemporalHelpers.assertPlainMonthDay(result, "M02", 29, `${name} ${value} is constrained to 29 in leap year 2020`);
  result = Temporal.PlainMonthDay.from({
    year: 2021,
    [name]: value,
    day: 29
  }, opt);
  TemporalHelpers.assertPlainMonthDay(result, "M02", 28, `${name} ${value} is constrained to 28 in common year 2021`);
});
[-1, 0, 13, 9995].forEach(month => {});
[-1, 0, 32, 999].forEach(day => {});
TemporalHelpers.ISOMonths.forEach(({month, monthCode, daysInMonth}) => {
  const day = daysInMonth + 1;
});
[["month", 2], ["monthCode", "M02"]].forEach(([name, value]) => {});