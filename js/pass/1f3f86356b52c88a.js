const timeZones = Intl.supportedValuesOf("timeZone");
for (let timeZone of timeZones) {
  let obj = new Intl.DateTimeFormat("en", {
    timeZone
  });
}