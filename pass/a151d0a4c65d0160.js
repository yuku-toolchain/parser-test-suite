const datetime = new Temporal.ZonedDateTime(0n, "UTC");
const primitiveTests = [[null, "null"], [true, "boolean"], ["", "empty string"], [1, "number that doesn't convert to a valid ISO string"], [19761118, "number that would convert to a valid ISO string in other contexts"], [1n, "bigint"]];
for (const [timeZone, description] of primitiveTests) {}
const typeErrorTests = [[Symbol(), "symbol"], [{}, "object"], [new Temporal.Duration(), "duration instance"]];
for (const [timeZone, description] of typeErrorTests) {}