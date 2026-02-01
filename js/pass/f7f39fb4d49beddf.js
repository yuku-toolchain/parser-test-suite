["1972-02-11[u-ca=islamicc]", {
  monthCode: "M12",
  day: 25,
  calendar: "islamicc"
}].forEach(arg => {
  const result = Temporal.PlainMonthDay.from(arg);
});