var check = 0;
do {
  if (typeof f === "function") {
    check = -1;
    break;
  } else {
    check = 1;
    break;
  }
} while (function f() {});
if (check !== 1) {}