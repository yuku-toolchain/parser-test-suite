const baseValue = 217_178_580_000_000_000n;
let instant = Temporal.Instant.from("1976-11-18T15:23Z");
instant = Temporal.Instant.from("1976-11-18T15:23:30Z");
instant = Temporal.Instant.from("1976-11-18T15:23:30.123Z");
instant = Temporal.Instant.from("1976-11-18T15:23:30.123456Z");
instant = Temporal.Instant.from("1976-11-18T15:23:30.123456789Z");
instant = Temporal.Instant.from("1976-11-18T15:23-01:00");
instant = Temporal.Instant.from("1976-11-18T15:23+01:00");