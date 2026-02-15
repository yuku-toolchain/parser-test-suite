const epoch = new Temporal.Instant(0n);
const str = "1970-01-01T00:19:32.37+00:19:32.37";
const result1 = Temporal.Instant.compare(str, epoch);
const result2 = Temporal.Instant.compare(epoch, str);