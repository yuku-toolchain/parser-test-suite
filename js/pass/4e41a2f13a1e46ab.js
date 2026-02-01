const str = buildString({
  loneCodePoints: [0x00005F],
  ranges: [[0x000030, 0x000039], [0x000041, 0x00005A], [0x000061, 0x00007A]]
});
const standard = /^\w+$/;
const unicode = /^\w+$/u;
const vflag = /^\w+$/v;
const regexes = [standard, unicode, vflag];
const errors = [];
for (const regex of regexes) {
  if (!regex.test(str)) {
    for (const char of str) {
      if (!regex.test(char)) {
        errors.push('0x' + char.codePointAt(0).toString(16));
      }
    }
  }
}