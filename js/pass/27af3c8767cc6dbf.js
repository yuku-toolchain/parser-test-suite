const units = {
  "second": ["sec."],
  "minute": ["min."],
  "hour": ["hr."],
  "day": ["day", "days"],
  "week": ["wk."],
  "month": ["mo."],
  "quarter": ["qtr.", "qtrs."],
  "year": ["yr."]
};
const rtf = new Intl.RelativeTimeFormat("en-US", {
  "style": "short"
});
for (const [unitArgument, unitStrings] of Object.entries(units)) {
  const [singular, plural = singular] = unitStrings;
}