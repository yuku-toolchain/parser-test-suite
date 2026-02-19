["input", "$_"].forEach(function (property) {
  const desc = Object.getOwnPropertyDescriptor(RegExp, property);
  ["get", "set"].forEach(function (accessor) {
    const messagePrefix = "RegExp." + property + " " + accessor + "ter";
    [undefined, null, {}, true, false, 0, 1, "string"].forEach(function (value) {});
  });
});