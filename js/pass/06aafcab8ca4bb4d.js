var invalidIterables = [undefined, null, true, "", Symbol(), 0, 0n];
for (var iterables of invalidIterables) {}
var badOptions = {
  get mode() {},
  get padding() {}
};
for (var iterables of invalidIterables) {}