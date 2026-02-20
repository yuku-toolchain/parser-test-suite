for (let id of Intl.supportedValuesOf("timeZone")) {
  let instance = new Temporal.ZonedDateTime(0n, id);
}