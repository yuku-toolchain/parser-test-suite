const primitiveTests = [[undefined, "undefined"], [null, "null"], [true, "boolean"], [1, "number that doesn't convert to a valid ISO string"], [19761118, "number that would convert to a valid ISO string in other contexts"], [1n, "bigint"], [Symbol(), "symbol"], [{}, "plain object"], [Temporal.Duration, "Temporal.Duration, object"], [Temporal.Duration.prototype, "Temporal.Duration.prototype, object"]];
for (const [arg, description] of primitiveTests) {
  for (const options of [undefined, {
    overflow: 'constrain'
  }, {
    overflow: 'reject'
  }]) {}
}