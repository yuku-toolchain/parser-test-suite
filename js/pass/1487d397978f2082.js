TemporalHelpers.assertPlainTime(Temporal.PlainTime.from({
  hour: 22
}, {
  overflow: "reject"
}), 22, 0, 0, 0, 0, 0);