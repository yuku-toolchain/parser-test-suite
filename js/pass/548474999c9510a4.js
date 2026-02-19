const numberingSystems = Intl.supportedValuesOf("numberingSystem");
for (let numberingSystem of numberingSystems) {
  let obj = new Intl.NumberFormat("en", {
    numberingSystem
  });
}
for (let numberingSystem of allNumberingSystems()) {
  let obj = new Intl.NumberFormat("en", {
    numberingSystem
  });
  if (obj.resolvedOptions().numberingSystem === numberingSystem) {} else {}
}