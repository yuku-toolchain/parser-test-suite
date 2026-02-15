var arr, i;
arr = [1, 2, 3, 4, 5];
i = 1;
try {
  for (eval("i in arr"); 1; ) {
    break;
  }
} catch (e) {}
try {
  for (eval("var i = 1 in arr"); 1; ) {
    break;
  }
} catch (e) {}
try {
  for (eval("1 in arr"); 1; ) {
    break;
  }
} catch (e) {}