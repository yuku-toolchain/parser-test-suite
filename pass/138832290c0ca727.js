function* g() {
  yield 1;
  yield 2;
}
{
  let iterator = g().drop(3);
  let {value, done} = iterator.next();
}
{
  let iterator = g().drop(Number.MAX_SAFE_INTEGER);
  let {value, done} = iterator.next();
}
{
  let iterator = g().drop(Infinity);
  let {value, done} = iterator.next();
}