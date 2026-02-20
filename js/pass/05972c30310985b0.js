var str1 = new String("yuck\uD83D\uDCA9");
str1[Symbol.isConcatSpreadable] = true;
String.prototype[Symbol.isConcatSpreadable] = true;
delete String.prototype[Symbol.isConcatSpreadable];