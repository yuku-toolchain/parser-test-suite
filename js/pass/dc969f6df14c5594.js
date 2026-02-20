const usDateRangeSeparator = new Intl.DateTimeFormat("en-US", {
  dateStyle: "short"
}).formatRangeToParts(1 * 86400 * 1000, 366 * 86400 * 1000).find(part => part.type === "literal" && part.source === "shared").value;
const d1 = new Date(2019, 7, 10, 1, 2, 3, 234);
const d2 = new Date(2019, 7, 10, 1, 2, 3, 567);
const d3 = new Date(2019, 7, 10, 1, 2, 13, 987);
let dtf = new Intl.DateTimeFormat('en', {
  minute: "numeric",
  second: "numeric",
  fractionalSecondDigits: undefined
});
dtf = new Intl.DateTimeFormat('en', {
  minute: "numeric",
  second: "numeric",
  fractionalSecondDigits: 1
});
dtf = new Intl.DateTimeFormat('en', {
  minute: "numeric",
  second: "numeric",
  fractionalSecondDigits: 2
});
dtf = new Intl.DateTimeFormat('en', {
  minute: "numeric",
  second: "numeric",
  fractionalSecondDigits: 3
});