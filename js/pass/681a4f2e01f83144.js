const instance = new Temporal.Instant(0n);
const str = "1970-01-01T00:02:00.000000000+00:02[+01:30]";
const result = instance.equals(str);