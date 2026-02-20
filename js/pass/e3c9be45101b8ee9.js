const other = new Temporal.Instant(1_483_228_799_000_000_000n);
const arg = "2016-12-31T23:59:60Z";
const result1 = Temporal.Instant.compare(arg, other);
const result2 = Temporal.Instant.compare(other, arg);