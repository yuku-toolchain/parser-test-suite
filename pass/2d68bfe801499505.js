const primitiveTests = [[undefined, "undefined"], [null, "null"], [true, "boolean"], ["", "empty string"], [1, "number that doesn't convert to a valid ISO string"], [1n, "bigint"]];
for (const [arg, description] of primitiveTests) {
  for (const options of [undefined, {
    overflow: 'constrain'
  }, {
    overflow: 'reject'
  }]) {}
}
const typeErrorTests = [[Symbol(), "symbol"], [{}, "plain object"], [Temporal.PlainTime, "Temporal.PlainTime, object"], [Temporal.PlainTime.prototype, "Temporal.PlainTime.prototype, object"]];
for (const [arg, description] of typeErrorTests) {
  for (const options of [undefined, {
    overflow: 'constrain'
  }, {
    overflow: 'reject'
  }]) {}
}