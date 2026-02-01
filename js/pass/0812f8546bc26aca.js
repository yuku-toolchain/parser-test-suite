const locale = "en-US-u-ca-gregory";
const timeZoneNameStyles = ["long", "short", "shortOffset", "longOffset", "shortGeneric", "longGeneric"];
const md = new Temporal.PlainMonthDay(1, 5, "gregory", 1972);
for (const timeZoneNameStyle of timeZoneNameStyles) {
  const dtf = new Intl.DateTimeFormat(locale, {
    timeZoneName: timeZoneNameStyle
  });
  const result = dtf.formatToParts(md);
  for (const {type} of result) {}
}