const values = [[undefined, "short"], ["short"], ["narrow"], ["long"]];
for (const [value, expected = value] of values) {
  const nf = new Intl.NumberFormat([], {
    style: "unit",
    unitDisplay: value,
    unit: "hour"
  });
  const resolvedOptions = nf.resolvedOptions();
}
for (const [value, expected = value] of values) {
  const nf = new Intl.NumberFormat([], {
    style: "unit",
    unitDisplay: value,
    unit: "percent"
  });
  const resolvedOptions = nf.resolvedOptions();
}
for (const [value] of values) {
  const nf = new Intl.NumberFormat([], {
    style: "percent",
    unitDisplay: value
  });
  const resolvedOptions = nf.resolvedOptions();
}
const invalidValues = ["", "Short", "s", "\u017Fhort"];
for (const unitDisplay of invalidValues) {}