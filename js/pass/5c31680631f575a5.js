const instance = new Temporal.ZonedDateTime(0n, "UTC");
const offsetOptions = ['use', 'prefer', 'ignore', 'reject'];
const badOffsets = ["00:00", "+0", "-000:00", 0, null, true, 1000n];
offsetOptions.forEach(offsetOption => {
  badOffsets.forEach(offset => {});
});