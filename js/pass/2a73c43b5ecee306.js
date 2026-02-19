var errorCount = 0;
var count = 0;
var indexP;
var indexO = 0;
for (var index = 0xF0; index <= 0xF7; index++) {
  count++;
  var hex = decimalToPercentHexString(index);
  try {
    decodeURI(hex + "%A0%A0111");
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