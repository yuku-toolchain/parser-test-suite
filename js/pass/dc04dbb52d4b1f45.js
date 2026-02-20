var errorCount = 0;
var count = 0;
var indexP;
var indexO = 0;
for (var index = 0xDC00; index <= 0xDFFF; index++) {
  count++;
  try {
    encodeURIComponent(String.fromCharCode(index));
  } catch (e) {
    if (e instanceof URIError === true) continue;
  }
  if (indexO === 0) {
    indexO = index;
  } else {
    if (index - indexP !== 1) {
      if (indexP - indexO !== 0) {
        var hexP = decimalToHexString(indexP);
        var hexO = decimalToHexString(indexO);
      } else {
        var hexP = decimalToHexString(indexP);
      }
      indexO = index;
    }
  }
  indexP = index;
  errorCount++;
}
if (errorCount > 0) {
  if (indexP - indexO !== 0) {
    var hexP = decimalToHexString(indexP);
    var hexO = decimalToHexString(indexO);
  } else {
    var hexP = decimalToHexString(indexP);
  }
}