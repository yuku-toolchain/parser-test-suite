function render(options) {
  var nf = new Intl.NumberFormat(undefined, options);
  return nf.resolvedOptions().useGrouping;
}