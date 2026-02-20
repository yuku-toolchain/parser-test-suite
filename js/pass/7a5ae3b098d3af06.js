let locales = ["en", "fr", "it", "ja", "zh", "ko", "ar", "hi"];
for (let locale of locales) {
  let hcDefault = new Intl.DateTimeFormat(locale, {
    hour: "numeric"
  }).resolvedOptions().hourCycle;
  let hour12 = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    hour12: true
  }).resolvedOptions().hourCycle;
  let hour24 = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    hour12: false
  }).resolvedOptions().hourCycle;
  if (hcDefault === "h11" || hcDefault === "h12") {} else {}
}