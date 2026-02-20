function isAlpha(c) {
  return "A" <= c && c <= "Z" || "a" <= c && c <= "z";
}
for (var cu = 0x00; cu <= 0x7f; ++cu) {
  var s = String.fromCharCode(cu);
  if (!isAlpha(s)) {}
}
for (var cu = 0x00; cu <= 0x7f; ++cu) {
  var s = String.fromCharCode(cu);
  if (!isAlpha(s)) {}
}