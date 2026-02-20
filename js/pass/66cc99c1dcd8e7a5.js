function isValidAlphaEscapeInAtom(s) {
  switch (s) {
    case "b":
    case "B":
    case "f":
    case "n":
    case "r":
    case "t":
    case "v":
    case "d":
    case "D":
    case "s":
    case "S":
    case "w":
    case "W":
      return true;
    default:
      return false;
  }
}
function isValidAlphaEscapeInClass(s) {
  switch (s) {
    case "b":
    case "f":
    case "n":
    case "r":
    case "t":
    case "v":
    case "d":
    case "D":
    case "s":
    case "S":
    case "w":
    case "W":
      return true;
    default:
      return false;
  }
}
for (var cu = 0x41; cu <= 0x5a; ++cu) {
  var s = String.fromCharCode(cu);
  if (!isValidAlphaEscapeInAtom(s)) {}
}
for (var cu = 0x61; cu <= 0x7a; ++cu) {
  var s = String.fromCharCode(cu);
  if (!isValidAlphaEscapeInAtom(s)) {}
}
for (var cu = 0x41; cu <= 0x5a; ++cu) {
  var s = String.fromCharCode(cu);
  if (!isValidAlphaEscapeInClass(s)) {}
}
for (var cu = 0x61; cu <= 0x7a; ++cu) {
  var s = String.fromCharCode(cu);
  if (!isValidAlphaEscapeInClass(s)) {}
}