const dateGregorian = Temporal.PlainYearMonth.from({
  year: 2024,
  monthCode: "M03",
  calendar: "gregory"
});
const dateIslamic = Temporal.PlainYearMonth.from({
  year: 1445,
  monthCode: "M09",
  calendar: "islamic-tbla"
});
const dateWithReferenceDay = new Temporal.PlainYearMonth(2024, 5, "gregory", 31);