const dtf = new Intl.DateTimeFormat(undefined, {
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});
const date = Date.now();
const expected = dtf.formatRange(0, date);