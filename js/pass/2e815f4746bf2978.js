if (isNaN(({}) % (function () {
  return 1;
})) !== true) {}
if (isNaN((function () {
  return 1;
}) % ({})) !== true) {}
if (isNaN((function () {
  return 1;
}) % (function () {
  return 1;
})) !== true) {}
if (isNaN(({}) % ({})) !== true) {}