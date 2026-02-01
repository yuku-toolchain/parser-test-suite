const seconds = 8692288669465520;
{
  const milliseconds = 513;
  const d = new Temporal.Duration(0, 0, 0, 0, 0, 0, seconds, milliseconds);
  const result = d.total({
    unit: "milliseconds"
  });
  const expectedMilliseconds = Number(BigInt(seconds) * 1000n + BigInt(milliseconds));
}
{
  const microseconds = 373761;
  const d = new Temporal.Duration(0, 0, 0, 0, 0, 0, seconds, 0, microseconds);
  const result = d.total({
    unit: "microseconds"
  });
  const expectedMicroseconds = Number(BigInt(seconds) * 1_000_000n + BigInt(microseconds));
}
{
  const nanoseconds = 321_414_345;
  const d = new Temporal.Duration(0, 0, 0, 0, 0, 0, seconds, 0, 0, nanoseconds);
  const result = d.total({
    unit: "nanoseconds"
  });
  const expectedNanoseconds = Number(BigInt(seconds) * 1_000_000_000n + BigInt(nanoseconds));
}
{
  const d = new Temporal.Duration(0, 0, 5, 5);
  const result = d.total({
    unit: "months",
    relativeTo: "1972-01-31"
  });
  const expectedMonths = 1.3548387096774193;
}