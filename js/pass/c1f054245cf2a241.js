var standardBase64Vectors = [["", []], ["Zg==", [102]], ["Zm8=", [102, 111]], ["Zm9v", [102, 111, 111]], ["Zm9vYg==", [102, 111, 111, 98]], ["Zm9vYmE=", [102, 111, 111, 98, 97]], ["Zm9vYmFy", [102, 111, 111, 98, 97, 114]]];
standardBase64Vectors.forEach(function (pair) {
  var allFF = [255, 255, 255, 255, 255, 255, 255, 255];
  var target = new Uint8Array(allFF);
  var result = target.setFromBase64(pair[0]);
  var expected = pair[1].concat(allFF.slice(pair[1].length));
});