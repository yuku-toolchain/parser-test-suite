const validStrings = ["1976-11-18T15:23+00:00", "1976-11-18T15:23+00:00[UTC]", "1976-11-18T15:23+00:00[!UTC]", "1976-11-18T15:23-02:30[America/St_Johns]"];
for (const arg of validStrings) {
  const result = Temporal.PlainDateTime.compare(arg, arg);
}
const invalidStrings = ["2022-09-15Z", "2022-09-15Z[UTC]", "2022-09-15Z[Europe/Vienna]", "2022-09-15+00:00", "2022-09-15+00:00[UTC]", "2022-09-15-02:30", "2022-09-15-02:30[America/St_Johns]"];
for (const arg of invalidStrings) {}