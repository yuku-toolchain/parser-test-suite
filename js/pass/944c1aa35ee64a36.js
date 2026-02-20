const primitiveTests = [[undefined, "undefined"], [null, "null"], [true, "boolean"], ["", "empty string"], [1, "number that doesn't convert to a valid ISO string"], [1n, "bigint"]];
for (const [arg, description] of primitiveTests) {}
const typeErrorTests = [[Symbol(), "symbol"], [{}, "plain object"], [Temporal.PlainDateTime, "Temporal.PlainDateTime, object"], [Temporal.PlainDateTime.prototype, "Temporal.PlainDateTime.prototype, object"]];
for (const [arg, description] of typeErrorTests) {}