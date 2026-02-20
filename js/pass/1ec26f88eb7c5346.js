const primitiveTests = [[undefined, "undefined"], [null, "null"], [true, "boolean"], ["", "empty string"], [1, "number that doesn't convert to a valid ISO string"], [19761118, "number that would convert to a valid ISO string in other contexts"], [1n, "bigint"]];
for (const [arg, description] of primitiveTests) {
  for (const options of [undefined, {
    overflow: 'constrain'
  }, {
    overflow: 'reject'
  }]) {}
}
const typeErrorTests = [[Symbol(), "symbol"], [{}, "plain object"], [Temporal.ZonedDateTime, "Temporal.ZonedDateTime, object"], [Temporal.ZonedDateTime.prototype, "Temporal.ZonedDateTime.prototype, object"]];
for (const [arg, description] of typeErrorTests) {
  for (const options of [undefined, {
    overflow: 'constrain'
  }, {
    overflow: 'reject'
  }]) {}
}