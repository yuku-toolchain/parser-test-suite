var instance = new Temporal.PlainDate(1970, 1, 1);
for (var timeZone of [null, false, 0, 0n, Symbol(), {}, [], function () {}]) {
  var item = {
    timeZone
  };
}