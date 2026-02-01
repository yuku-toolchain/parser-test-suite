const hcValues = ['h11', 'h12', 'h23', 'h24'];
const hour12Values = ['h11', 'h12'];
const dataPropertyDesc = {
  writable: true,
  enumerable: true,
  configurable: true
};
for (const hcValue of hcValues) {
  const resolvedOptions = new Intl.DateTimeFormat(`de-u-hc-${hcValue}`, {
    hour: 'numeric'
  }).resolvedOptions();
}
for (const hcValue of hcValues) {
  const resolvedOptions = new Intl.DateTimeFormat(`en-US`, {
    hour: 'numeric',
    hourCycle: hcValue
  }).resolvedOptions();
}
let resolvedOptions = new Intl.DateTimeFormat(`en-US-u-hc-h12`, {
  hour: 'numeric',
  hourCycle: 'h23'
}).resolvedOptions();
resolvedOptions = new Intl.DateTimeFormat(`fr`, {
  hour: 'numeric',
  hour12: true,
  hourCycle: 'h23'
}).resolvedOptions();
resolvedOptions = new Intl.DateTimeFormat(`fr-u-hc-h24`, {
  hour: 'numeric',
  hour12: true
}).resolvedOptions();
resolvedOptions = new Intl.DateTimeFormat("fr", {
  hourCycle: "h12",
  hour12: false
}).resolvedOptions();