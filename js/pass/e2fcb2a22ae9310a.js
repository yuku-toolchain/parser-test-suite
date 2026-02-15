const validOptions = [[undefined, "grapheme"], ["grapheme", "grapheme"], ["word", "word"], ["sentence", "sentence"], [{
  toString() {
    return "word";
  }
}, "word"]];
for (const [granularity, expected] of validOptions) {
  const segmenter = new Intl.Segmenter([], {
    granularity
  });
  const resolvedOptions = segmenter.resolvedOptions();
}