const hcValues = ["h11", "h12", "h23", "h24"];
const hour12Values = ["h11", "h12"];
const dataPropertyDesc = {
  writable: true,
  enumerable: true,
  configurable: true
};
for (const timeStyle of ["full", "long", "medium", "short"]) {
  for (const hcValue of hcValues) {
    const resolvedOptions = new Intl.DateTimeFormat(`de-u-hc-${hcValue}`, {
      timeStyle
    }).resolvedOptions();
  }
  for (const hcValue of hcValues) {
    const resolvedOptions = new Intl.DateTimeFormat("en-US", {
      timeStyle,
      hourCycle: hcValue
    }).resolvedOptions();
  }
  let resolvedOptions = new Intl.DateTimeFormat("en-US-u-hc-h12", {
    timeStyle,
    hourCycle: "h23"
  }).resolvedOptions();
  resolvedOptions = new Intl.DateTimeFormat("fr", {
    timeStyle,
    hour12: true,
    hourCycle: "h23"
  }).resolvedOptions();
  resolvedOptions = new Intl.DateTimeFormat("fr-u-hc-h24", {
    timeStyle,
    hour12: true
  }).resolvedOptions();
}