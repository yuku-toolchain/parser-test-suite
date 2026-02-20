var len = NaNs.length;
for (var idx = 0; idx < len; ++idx) {
  for (var jdx = 0; jdx < len; ++jdx) {
    var a = {};
    a.prop = NaNs[idx];
    a.prop = NaNs[jdx];
  }
}