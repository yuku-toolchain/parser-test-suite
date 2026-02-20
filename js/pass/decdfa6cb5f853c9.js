const tests = [[[], "undefined"], [[undefined], "undefined"], [[null], "null"], [[true], "true"], [[false], "false"], [[12], "12"], [[1.23], "1.23"], [[["a", "b"]], "a"], [[{}], "["]];
const segmenter = new Intl.Segmenter("en", {
  "granularity": "word"
});
for (const [args, expected] of tests) {
  const segments = segmenter.segment(...args);
  const actual = [...segments][0].segment;
}
const symbol = Symbol();