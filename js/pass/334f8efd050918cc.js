const pd = new Temporal.PlainDate(1970, 12, 24, "iso8601");
const pmd = pd.toPlainMonthDay();
TemporalHelpers.assertPlainMonthDay(pmd, "M12", 24);