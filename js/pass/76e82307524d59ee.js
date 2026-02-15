const instance = new Temporal.PlainDateTime(0, 10, 29, 10, 46, 38, 271, 986, 102);
["earlier", "later", "compatible", "reject"].forEach(disambiguation => {
  const result = instance.toZonedDateTime("+06:00", {
    disambiguation
  });
});
const instanceLeap = new Temporal.PlainDateTime(0, 2, 29);
["earlier", "later", "compatible", "reject"].forEach(disambiguation => {
  const result = instanceLeap.toZonedDateTime("-00:01", {
    disambiguation
  });
});