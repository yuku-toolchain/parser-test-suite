const dateGregorian = Temporal.PlainMonthDay.from({
  monthCode: "M03",
  day: 26,
  calendar: "gregory"
});
const dateIslamic = Temporal.PlainMonthDay.from({
  monthCode: "M09",
  day: 16,
  calendar: "islamic-tbla"
});
const dateWithReferenceYear = new Temporal.PlainMonthDay(5, 31, "gregory", 2222);