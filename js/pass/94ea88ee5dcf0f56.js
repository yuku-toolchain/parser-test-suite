function segments(iterator) {
  return [...iterator].map(result => result.segment);
}
class CustomSegmenter extends Intl.Segmenter {
  constructor(locales, options) {
    super(locales, options);
    this.isCustom = true;
  }
}
const locale = "de";
const value = "Hello";
const real_segmenter = new Intl.Segmenter(locale);
const custom_segmenter = new CustomSegmenter(locale);