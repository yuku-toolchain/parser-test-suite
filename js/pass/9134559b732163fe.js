const sameDate = new Temporal.PlainDate(2000, 5, 2);
const earlierDate = new Temporal.PlainDate(1920, 7, 3);
const laterDate = new Temporal.PlainDate(2005, 1, 12);
TemporalHelpers.checkPlainDateTimeConversionFastPath(datetime => {
  const result = Temporal.PlainDate.compare(datetime, sameDate);
}, "First argument, same date");
TemporalHelpers.checkPlainDateTimeConversionFastPath(datetime => {
  const result = Temporal.PlainDate.compare(datetime, earlierDate);
}, "First argument, earlier date");
TemporalHelpers.checkPlainDateTimeConversionFastPath(datetime => {
  const result = Temporal.PlainDate.compare(datetime, laterDate);
}, "First argument, later date");
TemporalHelpers.checkPlainDateTimeConversionFastPath(datetime => {
  const result = Temporal.PlainDate.compare(sameDate, datetime);
}, "Second argument, same date");
TemporalHelpers.checkPlainDateTimeConversionFastPath(datetime => {
  const result = Temporal.PlainDate.compare(earlierDate, datetime);
}, "Second argument, earlier date");
TemporalHelpers.checkPlainDateTimeConversionFastPath(datetime => {
  const result = Temporal.PlainDate.compare(laterDate, datetime);
}, "Second argument, later date");