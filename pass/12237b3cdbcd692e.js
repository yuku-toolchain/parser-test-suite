var getLengthThrow = {
  get length() {}
};
var invalidComparators = [null, true, false, "", /a/g, 42, 42n, [], {}, Symbol()];
for (var i = 0; i < invalidComparators.length; i++) {}