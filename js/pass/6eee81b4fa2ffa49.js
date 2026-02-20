var whitespaceKinds = [["Z g==", "space"], ["Z\tg==", "tab"], ["Z\x0Ag==", "LF"], ["Z\x0Cg==", "FF"], ["Z\x0Dg==", "CR"]];
whitespaceKinds.forEach(function (pair) {
  var target = new Uint8Array([255, 255, 255]);
  var result = target.setFromBase64(pair[0]);
});