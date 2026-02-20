const systemTimeZone = Temporal.Now.timeZoneId();
const resultExplicit = Temporal.Now.zonedDateTimeISO(undefined);
const resultImplicit = Temporal.Now.zonedDateTimeISO();