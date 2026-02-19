var isLockFree1;
var isLockFree2;
var isLockFree8;
{
  isLockFree1 = Atomics.isLockFree(1);
}
{
  isLockFree2 = Atomics.isLockFree(2);
}
{
  let isLockFree4 = Atomics.isLockFree(4);
}
{
  isLockFree8 = Atomics.isLockFree(8);
}
{
  for (let i = 0; i < 12; i++) {
    if (![1, 2, 4, 8].includes(i)) {}
  }
}