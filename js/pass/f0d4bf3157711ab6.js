const units = Intl.supportedValuesOf("unit");
for (let unit of units) {
  let obj = new Intl.NumberFormat("en", {
    style: "unit",
    unit
  });
}
for (let unit of allSimpleSanctionedUnits()) {
  let obj = new Intl.NumberFormat("en", {
    style: "unit",
    unit
  });
  if (obj.resolvedOptions().unit === unit) {} else {}
}