const numberingSystems = Intl.supportedValuesOf("numberingSystem");
for (let numberingSystem of numberingSystems) {
  let obj = new Intl.DateTimeFormat("en", {
    numberingSystem
  });
}
for (let numberingSystem of allNumberingSystems()) {
  let obj = new Intl.DateTimeFormat("en", {
    numberingSystem
  });
  if (obj.resolvedOptions().numberingSystem === numberingSystem) {} else {}
}