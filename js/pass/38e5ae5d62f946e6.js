const instance = new Temporal.ZonedDateTime(0n, "UTC");
const validStrings = ["1970-01-01T00Z[UTC]", "1970-01-01T00Z[!UTC]", "1970-01-01T00+00:00[UTC]", "1970-01-01T00+00:00[!UTC]"];
for (const arg of validStrings) {
  const result = instance.equals(arg);
}
const invalidStrings = ["2022-09-15Z[UTC]", "2022-09-15Z[Europe/Vienna]", "2022-09-15+00:00[UTC]", "2022-09-15-02:30[America/St_Johns]"];
for (const arg of invalidStrings) {}