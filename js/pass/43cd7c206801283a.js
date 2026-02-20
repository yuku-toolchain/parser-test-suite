const locale = "en-US-u-ca-gregory";
const timeZoneNameStyles = ["long", "short", "shortOffset", "longOffset", "shortGeneric", "longGeneric"];
const md1 = new Temporal.PlainMonthDay(1, 5, "gregory", 1972);
const md2 = new Temporal.PlainMonthDay(1, 6, "gregory", 1972);
for (const timeZoneNameStyle of timeZoneNameStyles) {
  const dtf = new Intl.DateTimeFormat(locale, {
    timeZoneName: timeZoneNameStyle
  });
  const result = dtf.formatRangeToParts(md1, md2);
  for (const {type} of result) {}
}