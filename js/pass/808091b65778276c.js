var __in__for = 0;
try {
  for (; ; ) {
    if (++__in__for > 100) throw 1;
  }
} catch (e) {
  if (e !== 1) {}
}
if (__in__for !== 101) {}