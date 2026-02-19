const str = buildString({
  loneCodePoints: [],
  ranges: [[0x000030, 0x000039]]
});
const standard = /\D/;
const unicode = /\D/u;
const vflag = /\D/v;
const regexes = [standard, unicode, vflag];
const errors = [];
for (const regex of regexes) {
  if (regex.test(str)) {
    for (const char of str) {
      if (regex.test(char)) {
        errors.push('0x' + char.codePointAt(0).toString(16));
      }
    }
  }
}