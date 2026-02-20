var result = Array.from(Iterator.zipKeyed({
  a: Object("abc"),
  b: Object("123")
}));
result.forEach(function (object) {});