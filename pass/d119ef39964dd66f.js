const dt = new Temporal.PlainDateTime(2015, 12, 7, 3, 24, 30, 0, 3, 500);
TemporalHelpers.assertPlainDateTime(dt.withPlainTime({
  hour: 10
}), 2015, 12, "M12", 7, 10, 0, 0, 0, 0, 0, "plain object (hour) works");
TemporalHelpers.assertPlainDateTime(dt.withPlainTime({
  hour: 10,
  seconds: 123
}), 2015, 12, "M12", 7, 10, 0, 0, 0, 0, 0, "unrecognized properties are ignored if at least one recognized property is present");