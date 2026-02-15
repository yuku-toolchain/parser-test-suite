const tests = [["15:23", "15:23:00"], ["15:23:30", "15:23:30"], ["15:23:30.1234", "15:23:30.1234"]];
for (const [input, expected] of tests) {
  const time = Temporal.PlainTime.from(input);
  const explicit = time.toString(undefined);
  const implicit = time.toString();
}