function isSyntaxCharacter(c) {
  switch (c) {
    case "^":
    case "$":
    case "\\":
    case ".":
    case "*":
    case "+":
    case "?":
    case "(":
    case ")":
    case "[":
    case "]":
    case "{":
    case "}":
    case "|":
      return true;
    default:
      return false;
  }
}
function isAlphaDigit(c) {
  return "0" <= c && c <= "9" || "A" <= c && c <= "Z" || "a" <= c && c <= "z";
}
for (var cu = 0x00; cu <= 0x7f; ++cu) {
  var s = String.fromCharCode(cu);
  if (!isAlphaDigit(s) && !isSyntaxCharacter(s) && s !== "/") {}
}
for (var cu = 0x00; cu <= 0x7f; ++cu) {
  var s = String.fromCharCode(cu);
  if (!isAlphaDigit(s) && !isSyntaxCharacter(s) && s !== "/" && s !== "-") {}
}