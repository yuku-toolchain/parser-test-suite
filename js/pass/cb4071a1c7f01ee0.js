const rtf = new Intl.Segmenter("en-us", {
  "lineBreakStyle": "loose",
  "granularity": "word"
});
const options = rtf.resolvedOptions();