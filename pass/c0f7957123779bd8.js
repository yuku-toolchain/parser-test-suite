const md = Temporal.PlainMonthDay.from("01-15");
TemporalHelpers.assertPlainMonthDay(md.with({
  day: 22
}), "M01", 22, "with({day})");
TemporalHelpers.assertPlainMonthDay(md.with({
  month: 12
}), "M12", 15, "with({month})");
TemporalHelpers.assertPlainMonthDay(md.with({
  monthCode: "M12"
}), "M12", 15, "with({monthCode})");
TemporalHelpers.assertPlainMonthDay(md.with({
  month: 12,
  monthCode: "M12"
}), "M12", 15, "with({month, monthCode}) agree");
TemporalHelpers.assertPlainMonthDay(md.with({
  year: 2000,
  month: 12
}), "M12", 15, "with({year, month})");
TemporalHelpers.assertPlainMonthDay(md.with({
  year: 2000
}), "M01", 15, "with({year})");
TemporalHelpers.assertPlainMonthDay(md.with({
  monthCode: "M12",
  days: 1
}), "M12", 15, "with({monthCode, days})");