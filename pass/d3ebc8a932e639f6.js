var softDotted = ["\u0069", "\u006A", "\u012F", "\u0249", "\u0268", "\u029D", "\u02B2", "\u03F3", "\u0456", "\u0458", "\u1D62", "\u1D96", "\u1DA4", "\u1DA8", "\u1E2D", "\u1ECB", "\u2071", "\u2148", "\u2149", "\u2C7C", "\uD835\uDC22", "\uD835\uDC23", "\uD835\uDC56", "\uD835\uDC57", "\uD835\uDC8A", "\uD835\uDC8B", "\uD835\uDCBE", "\uD835\uDCBF", "\uD835\uDCF2", "\uD835\uDCF3", "\uD835\uDD26", "\uD835\uDD27", "\uD835\uDD5A", "\uD835\uDD5B", "\uD835\uDD8E", "\uD835\uDD8F", "\uD835\uDDC2", "\uD835\uDDC3", "\uD835\uDDF6", "\uD835\uDDF7", "\uD835\uDE2A", "\uD835\uDE2B", "\uD835\uDE5E", "\uD835\uDE5F", "\uD835\uDE92", "\uD835\uDE93"];
function charInfo(ch) {
  function hexString(n) {
    var s = n.toString(16).toUpperCase();
    return ("0000").slice(s.length) + s;
  }
  if (ch.length === 1) {
    return "U+" + hexString(ch.charCodeAt(0));
  }
  var high = ch.charCodeAt(0);
  var low = ch.charCodeAt(1);
  var codePoint = (high << 10) + low + (0x10000 - (0xD800 << 10) - 0xDC00);
  return "U+" + hexString(codePoint) + " = " + hexString(high) + " " + hexString(low);
}
for (var i = 0; i < softDotted.length; ++i) {}
for (var i = 0; i < softDotted.length; ++i) {}
for (var i = 0; i < softDotted.length; ++i) {}