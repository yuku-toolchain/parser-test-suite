const blank = new Temporal.Duration();
const plainRelativeTo = new Temporal.PlainDate(2025, 8, 22);
const zonedRelativeTo = new Temporal.ZonedDateTime(1n, "UTC");
for (const unit of ['days', 'hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds']) {
  let result = blank.total(unit);
  result = blank.total({
    unit,
    relativeTo: plainRelativeTo
  });
  result = blank.total({
    unit,
    relativeTo: zonedRelativeTo
  });
}
for (const unit of ['years', 'months', 'weeks']) {
  let result = blank.total({
    unit,
    relativeTo: plainRelativeTo
  });
  result = blank.total({
    unit,
    relativeTo: zonedRelativeTo
  });
}