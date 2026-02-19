var x = (function __func() {
  return arguments[0] + "-" + arguments[1];
})("Obi", "Wan");
if (x !== "Obi-Wan") {}
if (typeof __func !== 'undefined') {}