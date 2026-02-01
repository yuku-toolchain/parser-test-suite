testWithIntlConstructors(function (Constructor) {
  if (Constructor === Intl.DateTimeFormat) return;
  var obj, newObj;
  obj = new Constructor();
  newObj = Intl.DateTimeFormat.call(obj);
  if (Constructor !== Intl.Collator && Constructor !== Intl.NumberFormat && Constructor !== Intl.DateTimeFormat) {
    return;
  }
  obj = Constructor();
  newObj = Intl.DateTimeFormat.call(obj);
});