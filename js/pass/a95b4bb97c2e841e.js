let zdt = new Temporal.ZonedDateTime(0n, "America/Los_Angeles");
for (let count = 0; count < 4; count++) {
  const transition = zdt.getTimeZoneTransition("next");
  zdt = transition;
}
zdt = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "America/Los_Angeles");
for (let count = 0; count < 4; count++) {
  const transition = zdt.getTimeZoneTransition("previous");
  zdt = transition;
}