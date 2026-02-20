const instance = new Temporal.PlainDateTime(98, 10, 29, 10, 46, 38, 271, 986, 102);
["earlier", "later", "compatible", "reject"].forEach(disambiguation => {
  const result = instance.toZonedDateTime("+06:00", {
    disambiguation
  });
});