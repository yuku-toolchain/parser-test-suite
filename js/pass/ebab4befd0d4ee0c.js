function SwitchTest(value) {
  var result = 0;
  switch (value) {
    case 0:
      result += 2;
    case 1:
      result += 4;
      break;
    case 2:
      result += 8;
    case 3:
      result += 16;
    default:
      result += 32;
      break;
    case null:
      result += 64;
    case NaN:
      result += 128;
      break;
    case Infinity:
      result += 256;
    case 2 + 3:
      result += 512;
      break;
    case undefined:
      result += 1024;
  }
  return result;
}
if (!(SwitchTest(0) === 6)) {}
if (!(SwitchTest(1) === 4)) {}
if (!(SwitchTest(2) === 56)) {}
if (!(SwitchTest(3) === 48)) {}
if (!(SwitchTest(4) === 32)) {}
if (!(SwitchTest(5) === 512)) {}
if (!(SwitchTest(true) === 32)) {}
if (!(SwitchTest(false) === 32)) {}
if (!(SwitchTest(null) === 192)) {}
if (!(SwitchTest(void 0) === 1024)) {}
if (!(SwitchTest(NaN) === 32)) {}
if (!(SwitchTest(Infinity) === 768)) {}