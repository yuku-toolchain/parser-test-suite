var dtf = new Intl.DateTimeFormat(undefined, {
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});
function formatAsString(dtf, time) {
  return dtf.formatToParts(time).map(part => part.value).join("");
}
var expected = formatAsString(dtf, 0);