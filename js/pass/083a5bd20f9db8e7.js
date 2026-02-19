var arr = (/((((((((((A))))))))))\10\9\8\7\6\5\4\3\2\1/).exec("AAAAAAAAAAA");
if (arr === null || arr[0] !== "AAAAAAAAAAA") {}
for (var i = 1; i <= 10; i++) {
  if (arr === null || arr[i] !== "A") {}
}