var str1 = new String("h");
var str2 = new String("\x68");
if (str1.localeCompare(str2) !== 0) {}
var str2 = new String("\u0068");
if (str1.localeCompare(str2) !== 0) {}
var str2 = new String("h");
if (str1.localeCompare(str2) !== 0) {}