const instance = new Temporal.PlainDate(2000, 5, 2);
const primitiveTests = [[undefined, "undefined"], [null, "null"], [true, "boolean"], ["", "empty string"], [1, "number that doesn't convert to a valid ISO string"], [1n, "bigint"]];
for (const [arg, description] of primitiveTests) {}
const typeErrorTests = [[Symbol(), "symbol"], [{}, "plain object"], [Temporal.PlainDate, "Temporal.PlainDate, object"], [Temporal.PlainDate.prototype, "Temporal.PlainDate.prototype, object"]];
for (const [arg, description] of typeErrorTests) {}