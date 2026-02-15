for (const unit of ["test", "MILE", "kB"]) {
  for (const style of [undefined, "decimal", "unit"]) {}
  const style = "currency";
}
const nf = new Intl.NumberFormat([], {
  style: "percent"
});
function check(unit) {
  const nf = new Intl.NumberFormat([], {
    style: "unit",
    unit
  });
  const options = nf.resolvedOptions();
}
const units = allSimpleSanctionedUnits();
for (const simpleUnit of units) {
  check(simpleUnit);
  for (const simpleUnit2 of units) {
    check(simpleUnit + "-per-" + simpleUnit2);
    check(simpleUnit2 + "-per-" + simpleUnit);
  }
}