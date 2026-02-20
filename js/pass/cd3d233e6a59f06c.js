var whitespaceKinds = [["Z g==", "space"], ["Z\tg==", "tab"], ["Z\x0Ag==", "LF"], ["Z\x0Cg==", "FF"], ["Z\x0Dg==", "CR"]];
whitespaceKinds.forEach(function (pair) {
  var arr = Uint8Array.fromBase64(pair[0]);
});