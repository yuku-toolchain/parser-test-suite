const validStrings = ["2000-05-02T00+00:00", "2000-05-02T00+00:00[UTC]", "2000-05-02T00+00:00[!UTC]", "2000-05-02T00-02:30[America/St_Johns]"];
for (const arg of validStrings) {
  const result = Temporal.PlainDate.compare(arg, arg);
}
const invalidStrings = ["2022-09-15Z", "2022-09-15Z[UTC]", "2022-09-15Z[Europe/Vienna]", "2022-09-15+00:00", "2022-09-15+00:00[UTC]", "2022-09-15-02:30", "2022-09-15-02:30[America/St_Johns]"];
for (const arg of invalidStrings) {}