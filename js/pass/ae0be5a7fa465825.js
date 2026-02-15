const numberingSystems = Intl.supportedValuesOf("numberingSystem");
for (let numberingSystem of numberingSystems) {
  let obj = new Intl.RelativeTimeFormat("en", {
    numberingSystem
  });
}
for (let numberingSystem of allNumberingSystems()) {
  let obj = new Intl.RelativeTimeFormat("en", {
    numberingSystem
  });
  if (obj.resolvedOptions().numberingSystem === numberingSystem) {} else {}
}