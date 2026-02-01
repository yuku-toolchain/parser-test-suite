var x = new Number(2);
function SwitchTest(value) {
  var result = 0;
  switch (value) {
    case 0:
      result += 2;
    case '1':
      result += 4;
      break;
    case new Number(2):
      result += 8;
    case 3:
      result += 16;
    default:
      result += 32;
      break;
    case 4:
      result += 64;
      break;
    case x:
      result += 128;
      break;
    case 0:
      result += 256;
    case 1:
      result += 512;
  }
  return result;
}
if (!(SwitchTest(0) === 6)) {}
if (!(SwitchTest(1) === 512)) {}
if (!(SwitchTest(2) === 32)) {}
if (!(SwitchTest(3) === 48)) {}
if (!(SwitchTest(4) === 64)) {}
if (!(SwitchTest(true) === 32)) {}
if (!(SwitchTest(false) === 32)) {}
if (!(SwitchTest(null) === 32)) {}
if (!(SwitchTest(void 0) === 32)) {}
if (!(SwitchTest('0') === 32)) {}
if (!(SwitchTest(x) === 128)) {}