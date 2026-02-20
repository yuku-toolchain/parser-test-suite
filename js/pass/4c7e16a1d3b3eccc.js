var arr = (/((((((((((A))))))))))\1\2\3\4\5\6\7\8\9\10/).exec("AAAAAAAAAAA");
if (arr === null || arr[0] !== "AAAAAAAAAAA") {}
for (var i = 1; i <= 10; i++) {
  if (arr === null || arr[i] !== "A") {}
}