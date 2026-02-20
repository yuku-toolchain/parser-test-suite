const rtf = new Intl.RelativeTimeFormat("en-US");
const units = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"];
for (const unit of units) {
  const plural = rtf.formatToParts(3, unit + "s");
  const singular = rtf.formatToParts(3, unit);
  for (let i = 0; i < plural.length; ++i) {}
}