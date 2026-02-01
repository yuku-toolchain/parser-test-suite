const usDateRangeSeparator = new Intl.DateTimeFormat("en-US", {
  dateStyle: "short"
}).formatRangeToParts(1 * 86400 * 1000, 366 * 86400 * 1000).find(part => part.type === "literal" && part.source === "shared").value;
const date1 = new Date("2019-01-03T00:00:00");
const date2 = new Date("2019-01-05T00:00:00");
const date3 = new Date("2019-03-04T00:00:00");
const date4 = new Date("2020-03-04T00:00:00");
let dtf = new Intl.DateTimeFormat("en-US");
dtf = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric"
});