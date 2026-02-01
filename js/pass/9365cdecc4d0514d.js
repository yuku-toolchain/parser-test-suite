const instance = new Temporal.PlainDateTime(2019, 2, 16, 23, 45);
["earlier", "later", "compatible", "reject"].forEach(disambiguation => {
  const result = instance.toZonedDateTime("+03:30", {
    disambiguation
  });
});