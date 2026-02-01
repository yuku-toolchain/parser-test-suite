const zdt = new Temporal.PlainDateTime(1976, 11, 18, 15, 23, 30, 123, 456, 789).toZonedDateTime("UTC");
for (let i = 29; i <= 31; ++i) {
  const zdt = new Temporal.PlainDateTime(1975, 12, i, 15, 23, 30, 123, 456, 789).toZonedDateTime("UTC");
}
for (let i = 1; i <= 4; ++i) {
  const zdt = new Temporal.PlainDateTime(1976, 1, i, 15, 23, 30, 123, 456, 789).toZonedDateTime("UTC");
}
for (let i = 5; i <= 11; ++i) {
  const zdt = new Temporal.PlainDateTime(1976, 1, i, 15, 23, 30, 123, 456, 789).toZonedDateTime("UTC");
}
for (let i = 20; i <= 26; ++i) {
  const zdt = new Temporal.PlainDateTime(1976, 12, i, 15, 23, 30, 123, 456, 789).toZonedDateTime("UTC");
}
for (let i = 27; i <= 31; ++i) {
  const zdt = new Temporal.PlainDateTime(1976, 12, i, 15, 23, 30, 123, 456, 789).toZonedDateTime("UTC");
}
for (let i = 1; i <= 2; ++i) {
  const zdt = new Temporal.PlainDateTime(1977, 1, i, 15, 23, 30, 123, 456, 789).toZonedDateTime("UTC");
}