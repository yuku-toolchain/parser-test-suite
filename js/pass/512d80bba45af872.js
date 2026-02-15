const date1 = new Temporal.PlainDate(2000, 5, 2);
const date2 = new Temporal.PlainDate(2000, 5, 2, "gregory");
[[date1, "2000-05-02"], [date2, "2000-05-02[u-ca=gregory]"]].forEach(([date, expected]) => {
  const explicit = date.toString(undefined);
  const implicit = date.toString();
});