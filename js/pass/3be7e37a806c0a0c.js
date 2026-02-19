function timeZoneId(zdt) {
  let str = zdt.toString();
  let m = str.match(/(?<=\[)[\w\/_+-]+(?=\])/);
  return m[0];
}
for (let id of Intl.supportedValuesOf("timeZone")) {
  let instance = new Temporal.ZonedDateTime(0n, id);
}