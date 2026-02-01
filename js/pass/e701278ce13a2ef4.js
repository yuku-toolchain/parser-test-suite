var dtf = new Intl.DateTimeFormat(undefined, {
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});
var expected = dtf.format(0);