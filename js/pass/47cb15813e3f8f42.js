const timeZone = "UTC";
const instance = new Temporal.Duration(1, 0, 0, 0, 24);
const primitiveTests = [[undefined, 'undefined'], [null, 'null'], [true, 'boolean'], ['', 'empty string'], [1, 'number'], [1n, 'bigint']];
for (const [relativeTo, description] of primitiveTests) {}
const typeErrorTests = [[Symbol(), 'symbol'], [{}, 'plain object'], [Temporal.PlainDate, 'Temporal.PlainDate, object'], [Temporal.PlainDate.prototype, 'Temporal.PlainDate.prototype, object'], [Temporal.ZonedDateTime, 'Temporal.ZonedDateTime, object'], [Temporal.ZonedDateTime.prototype, 'Temporal.ZonedDateTime.prototype, object']];
for (const [relativeTo, description] of typeErrorTests) {}