testWithIntlConstructors(function (Constructor) {
  if (Constructor === Intl.NumberFormat) return;
  var obj, newObj;
  obj = new Constructor();
  newObj = Intl.NumberFormat.call(obj);
  if (Constructor !== Intl.Collator && Constructor !== Intl.NumberFormat && Constructor !== Intl.DateTimeFormat) {
    return;
  }
  obj = Constructor();
  newObj = Intl.NumberFormat.call(obj);
});