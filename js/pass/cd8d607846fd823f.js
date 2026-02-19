const londonPrev = new Temporal.ZonedDateTime(0n, "Europe/London").getTimeZoneTransition("previous");
const londonNext = new Temporal.ZonedDateTime(-39488400000000000n, "Europe/London").getTimeZoneTransition("next");
const anchoragePrev = new Temporal.ZonedDateTime(-84290400000000000n, "America/Anchorage").getTimeZoneTransition("previous");
const anchorageNext = new Temporal.ZonedDateTime(-94658400000000000n, "America/Anchorage").getTimeZoneTransition("next");