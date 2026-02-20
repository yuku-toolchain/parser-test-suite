function* invalidControls() {
  for (var alpha = 0x0410; alpha <= 0x042F; alpha++) {
    yield String.fromCharCode(alpha);
  }
  for (alpha = 0x0430; alpha <= 0x044F; alpha++) {
    yield String.fromCharCode(alpha);
  }
  for (alpha = 0x00; alpha <= 0x7F; alpha++) {
    let letter = String.fromCharCode(alpha);
    if (!letter.match(/[0-9A-Za-z_\$(|)\[\]\/\\^]/)) {
      yield letter;
    }
  }
  yield "";
}
for (let letter of invalidControls()) {
  var source = "\\c" + letter;
  var re = new RegExp(source);
  if (letter.length > 0) {
    var char = letter.charCodeAt(0);
    var str = String.fromCharCode(char % 32);
    var arr = re.exec(str);
  }
  arr = re.exec(source.substring(1));
  arr = re.exec(source);
}