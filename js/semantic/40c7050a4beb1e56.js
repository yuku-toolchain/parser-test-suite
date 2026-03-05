using z = null;
{
  using z = undefined;
}
if (true) {
  const obj = {
    [Symbol.dispose]() {}
  };
  using z = obj;
}