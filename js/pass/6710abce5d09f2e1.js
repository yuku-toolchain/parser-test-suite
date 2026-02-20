var x;
for (x in (function __func() {
  return {
    a: 1
  };
})()) {
  var __reached = x;
}
if (__reached !== "a") {}