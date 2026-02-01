function* g() {
  yield 1;
  yield 2;
}
let iterator = g().drop(1);
{
  let {value, done} = iterator.next();
}
{
  let {value, done} = iterator.next();
}