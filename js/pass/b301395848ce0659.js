const epoch = new Temporal.Instant(0n);
const tests = [["1970-01-01T00:00Z", "uppercase T"], ["1970-01-01t00:00Z", "lowercase T"], ["1970-01-01 00:00Z", "space between date and time"]];
tests.forEach(([arg, description]) => {});