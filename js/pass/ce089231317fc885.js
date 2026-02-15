const hcValues = ["h11", "h12", "h23", "h24"];
const hour12Values = ["h11", "h12"];
for (const dateStyle of ["full", "long", "medium", "short"]) {
  for (const hcValue of hcValues) {
    const resolvedOptions = new Intl.DateTimeFormat(`de-u-hc-${hcValue}`, {
      dateStyle
    }).resolvedOptions();
  }
  for (const hcValue of hcValues) {
    const resolvedOptions = new Intl.DateTimeFormat("en-US", {
      dateStyle,
      hourCycle: hcValue
    }).resolvedOptions();
  }
  let resolvedOptions = new Intl.DateTimeFormat("en-US-u-hc-h12", {
    dateStyle,
    hourCycle: "h23"
  }).resolvedOptions();
  resolvedOptions = new Intl.DateTimeFormat("fr", {
    dateStyle,
    hour12: true,
    hourCycle: "h23"
  }).resolvedOptions();
  resolvedOptions = new Intl.DateTimeFormat("fr-u-hc-h24", {
    dateStyle,
    hour12: true
  }).resolvedOptions();
}