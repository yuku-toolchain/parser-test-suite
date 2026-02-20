const locale = "en-US";
const timeZoneNameStyles = ["long", "short", "shortOffset", "longOffset", "shortGeneric", "longGeneric"];
const time1 = new Temporal.PlainTime(12, 34);
const time2 = new Temporal.PlainTime(18, 45);
for (const timeZoneNameStyle of timeZoneNameStyles) {
  const dtf = new Intl.DateTimeFormat(locale, {
    timeZoneName: timeZoneNameStyle
  });
  const result = dtf.formatRangeToParts(time1, time2);
  for (const {type} of result) {}
}