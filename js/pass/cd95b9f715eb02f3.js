const primitiveTests = [[undefined, "undefined"], [null, "null"], [true, "boolean"], ["", "empty string"], [1, "number that doesn't convert to a valid ISO string"], [1n, "bigint"]];
for (const [arg, description] of primitiveTests) {
  for (const options of [undefined, {
    overflow: 'constrain'
  }, {
    overflow: 'reject'
  }]) {}
}
const typeErrorTests = [[Symbol(), "symbol"], [{}, "plain object"], [Temporal.PlainMonthDay, "Temporal.PlainMonthDay, object"], [Temporal.PlainMonthDay.prototype, "Temporal.PlainMonthDay.prototype, object"]];
for (const [arg, description] of typeErrorTests) {
  for (const options of [undefined, {
    overflow: 'constrain'
  }, {
    overflow: 'reject'
  }]) {}
}