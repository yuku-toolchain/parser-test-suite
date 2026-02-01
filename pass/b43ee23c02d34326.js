const formatter = new Intl.DateTimeFormat(["en"], {
  era: "narrow",
  timeZone: "UTC"
});
const dateResult = formatter.formatRange(new Date(0), new Date(1));