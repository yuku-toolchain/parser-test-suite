function __func() {
  var is_undef = true;
  for (var i = 0; i < arguments.length; i++) {
    delete arguments[i];
    is_undef = is_undef && typeof arguments[i] === "undefined";
  }
  return is_undef;
}
if (!__func("A", "B", 1, 2)) {}