testWithIntlConstructors(function (Constructor) {
  var obj, newObj;
  obj = new Constructor();
  newObj = Intl.Collator.call(obj);
  if (Constructor !== Intl.Collator && Constructor !== Intl.NumberFormat && Constructor !== Intl.DateTimeFormat) {
    return;
  }
  obj = Constructor();
  newObj = Intl.Collator.call(obj);
});