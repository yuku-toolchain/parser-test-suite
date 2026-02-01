const rtf = new Intl.RelativeTimeFormat("en-us", {
  "style": "short",
  "numeric": "auto"
});
const options = rtf.resolvedOptions();