const granularities = [undefined, "grapheme", "word"];
const inputs = ["123 ", "a ", " a", " \ud800\udc00", "\ud800\udc00 ", "\udc00\ud800", "\ud800 ", "\udc00 ", " \ud800", " \udc00", " 台", "台 ", "\u0301 "];
granularities.forEach(function (granularity) {
  const segmenter = new Intl.Segmenter(undefined, {
    granularity
  });
  inputs.forEach(function (input) {
    const segment = segmenter.segment(input);
    let msg = `granularity: ${granularity} input: ${input}`;
    const first = segment.containing(0);
    const last = segment.containing(input.length - 1);
    msg += ` containing(${input.length - 1}) `;
  });
});