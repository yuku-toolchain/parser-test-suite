const locale = "en-US";
const timeZoneNameStyles = ["long", "short", "shortOffset", "longOffset", "shortGeneric", "longGeneric"];
const pdt1 = new Temporal.PlainDateTime(2026, 1, 5, 11, 22);
const pdt2 = new Temporal.PlainDateTime(2026, 1, 5, 11, 23);
for (const timeZoneNameStyle of timeZoneNameStyles) {
  const dtf = new Intl.DateTimeFormat(locale, {
    timeZoneName: timeZoneNameStyle
  });
  const result = dtf.formatRangeToParts(pdt1, pdt2);
  for (const {type} of result) {}
}