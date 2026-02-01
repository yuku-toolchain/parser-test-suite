const dt = new Temporal.ZonedDateTime(1n, "UTC");
const blank = new Temporal.Duration();
const result = dt.add(blank);