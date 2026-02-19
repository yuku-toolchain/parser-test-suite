var __str;
__str = "";
outer: for (var index = 0; index < 4; index += 1) {
  nested: for (var index_n = 0; index_n <= index; index_n++) {
    if (index * index_n == 6) continue nested;
    __str += "" + index + index_n;
  }
}
if (__str !== "001011202122303133") {}
__str = "";
outer: for (var index = 0; index < 4; index += 1) {
  nested: for (var index_n = 0; index_n <= index; index_n++) {
    if (index * index_n == 6) continue outer;
    __str += "" + index + index_n;
  }
}
if (__str !== "0010112021223031") {}
__str = "";
outer: for (var index = 0; index < 4; index += 1) {
  nested: for (var index_n = 0; index_n <= index; index_n++) {
    if (index * index_n == 6) continue;
    __str += "" + index + index_n;
  }
}
if (__str !== "001011202122303133") {}