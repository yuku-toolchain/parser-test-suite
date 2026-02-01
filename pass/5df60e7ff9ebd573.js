var errorCount = 0;
var count = 0;
var indexP;
var indexO = 0;
for (var index = 0xE0; index <= 0xEF; index++) {
  count++;
  var str = "";
  var result = true;
  for (var len = 0; len < 6; len++) {
    var hex = decimalToPercentHexString(index);
    try {
      decodeURI(hex + str);
    } catch (e) {
      if (e instanceof URIError === true) continue;
    }
    result = false;
    str = str + "1";
  }
  if (result !== true) {
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
}
if (errorCount > 0) {
  if (indexP - indexO !== 0) {
    var hexP = decimalToHexString(indexP);
    var hexO = decimalToHexString(indexO);
  } else {
    var hexP = decimalToHexString(indexP);
  }
}