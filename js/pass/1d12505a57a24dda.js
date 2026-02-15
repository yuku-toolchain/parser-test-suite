const input = "a c";
const granularities = [undefined, "grapheme", "word"];
const index_to_one = [1, 1.49, 14.9E-1, 14.9e-1, "1.49", "14.9E-1", "14.9e-1", true, {
  toString() {
    return "1";
  }
}, {
  valueOf() {
    return 1;
  }
}, {
  [Symbol.toPrimitive]() {
    return 1;
  }
}];
granularities.forEach(function (granularity) {
  const segmenter = new Intl.Segmenter(undefined, {
    granularity
  });
  const segment = segmenter.segment(input);
  index_to_one.forEach(function (index) {
    const result = segment.containing(index);
    const msg = "granularity: " + granularity + " index: " + index;
  });
});
const segmenter = new Intl.Segmenter(undefined, {
  granularity: "sentence"
});
const segment = segmenter.segment(input);
index_to_one.forEach(function (index) {
  const result = segment.containing(index);
  const msg = "granularity: sentence index: " + index;
});