const instance = new Temporal.PlainMonthDay(5, 2);
const validStrings = ["05-02[Asia/Katmandu]", "05-02[!Asia/Katmandu]", "05-02[u-ca=iso8601]", "05-02[Asia/Tokyo][u-ca=iso8601]", "--05-02[Asia/Katmandu]", "--05-02[!Asia/Katmandu]", "--05-02[u-ca=iso8601]", "--05-02[Asia/Tokyo][u-ca=iso8601]", "2000-05-02T00+00:00", "2000-05-02T00+00:00[UTC]", "2000-05-02T00-02:30[America/St_Johns]"];
for (const arg of validStrings) {
  const result = instance.equals(arg);
}
const invalidStrings = ["09-15Z", "09-15Z[UTC]", "09-15+01:00", "09-15+01:00[Europe/Vienna]", "--09-15Z", "--09-15Z[UTC]", "--09-15+01:00", "--09-15+01:00[Europe/Vienna]", "2022-09-15Z", "2022-09-15Z[UTC]", "2022-09-15Z[Europe/Vienna]", "2022-09-15+00:00", "2022-09-15+00:00[UTC]", "2022-09-15-02:30", "2022-09-15-02:30[America/St_Johns]", "09-15[u-ca=chinese]"];
for (const arg of invalidStrings) {}