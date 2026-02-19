const locale = "en-US";
const timeZoneNameStyles = ["long", "short", "shortOffset", "longOffset", "shortGeneric", "longGeneric"];
const time = new Temporal.PlainTime(12, 34);
for (const timeZoneNameStyle of timeZoneNameStyles) {
  const dtf = new Intl.DateTimeFormat(locale, {
    timeZoneName: timeZoneNameStyle
  });
  const result = dtf.formatToParts(time);
  for (const {type} of result) {}
}