const seconds = 8692288669465520;
{
  const milliseconds = 513;
  const d = new Temporal.Duration(0, 0, 0, 0, 0, 0, seconds, milliseconds);
  const result = d.round({
    largestUnit: "milliseconds"
  });
  const expectedMilliseconds = Number(BigInt(seconds) * 1000n + BigInt(milliseconds));
  TemporalHelpers.assertDuration(result, 0, 0, 0, 0, 0, 0, 0, expectedMilliseconds, 0, 0, "BalanceTimeDuration should implement floating-point calculation correctly for largestUnit milliseconds");
}
{
  const microseconds = 373761;
  const d = new Temporal.Duration(0, 0, 0, 0, 0, 0, seconds, 0, microseconds);
  const result = d.round({
    largestUnit: "microseconds"
  });
  const expectedMicroseconds = Number(BigInt(seconds) * 1_000_000n + BigInt(microseconds));
  TemporalHelpers.assertDuration(result, 0, 0, 0, 0, 0, 0, 0, 0, expectedMicroseconds, 0, "BalanceTimeDuration should implement floating-point calculation correctly for largestUnit milliseconds");
}
{
  const nanoseconds = 321_414_345;
  const d = new Temporal.Duration(0, 0, 0, 0, 0, 0, seconds, 0, 0, nanoseconds);
  const result = d.round({
    largestUnit: "nanoseconds"
  });
  const expectedNanoseconds = Number(BigInt(seconds) * 1_000_000_000n + BigInt(nanoseconds));
  TemporalHelpers.assertDuration(result, 0, 0, 0, 0, 0, 0, 0, 0, 0, expectedNanoseconds, "BalanceTimeDuration should implement floating-point calculation correctly for largestUnit nanoseconds");
}