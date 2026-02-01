const instant = new Temporal.Instant(1735213600_321_000_000n);
const result = instant.toLocaleString("en", {
  timeZone: "UTC"
});