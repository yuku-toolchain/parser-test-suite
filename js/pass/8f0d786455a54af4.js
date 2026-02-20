const md = Temporal.PlainMonthDay.from({
  monthCode: "M02",
  day: 30
}, {
  overflow: "constrain"
});