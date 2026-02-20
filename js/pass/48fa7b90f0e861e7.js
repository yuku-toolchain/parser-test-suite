var options = {
  type: 'language'
};
Object.defineProperty(options, 'fallBack', {
  get() {}
});
Object.defineProperty(options, 'localematcher', {
  get() {}
});
Object.defineProperty(options, 'locale-matcher', {
  get() {}
});
Object.defineProperty(options, 'Type', {
  get() {}
});
var obj = new Intl.DisplayNames('en', options);