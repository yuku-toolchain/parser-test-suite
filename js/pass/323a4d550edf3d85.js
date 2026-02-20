const instance = new Temporal.PlainYearMonth(2000, 5);
const primitiveTests = [[undefined, "undefined"], [null, "null"], [true, "boolean"], ["", "empty string"], [1, "number that doesn't convert to a valid ISO string"], [1n, "bigint"]];
for (const [arg, description] of primitiveTests) {}
const typeErrorTests = [[Symbol(), "symbol"], [{}, "plain object"], [Temporal.PlainYearMonth, "Temporal.PlainYearMonth, object"], [Temporal.PlainYearMonth.prototype, "Temporal.PlainYearMonth.prototype, object"]];
for (const [arg, description] of typeErrorTests) {}