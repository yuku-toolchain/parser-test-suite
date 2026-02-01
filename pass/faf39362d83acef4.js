var options;
options = new Intl.NumberFormat([], {}).resolvedOptions();
options = new Intl.NumberFormat([], {
  roundingMode: 'ceil'
}).resolvedOptions();
options = new Intl.NumberFormat([], {
  roundingMode: 'floor'
}).resolvedOptions();
options = new Intl.NumberFormat([], {
  roundingMode: 'expand'
}).resolvedOptions();
options = new Intl.NumberFormat([], {
  roundingMode: 'trunc'
}).resolvedOptions();
options = new Intl.NumberFormat([], {
  roundingMode: 'halfCeil'
}).resolvedOptions();
options = new Intl.NumberFormat([], {
  roundingMode: 'halfFloor'
}).resolvedOptions();
options = new Intl.NumberFormat([], {
  roundingMode: 'halfExpand'
}).resolvedOptions();
options = new Intl.NumberFormat([], {
  roundingMode: 'halfTrunc'
}).resolvedOptions();
options = new Intl.NumberFormat([], {
  roundingMode: 'halfEven'
}).resolvedOptions();