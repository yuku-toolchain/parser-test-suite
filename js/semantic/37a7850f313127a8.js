await using z = null;
{
  await using z = undefined;
}
if (true) {
  const obj = {
    [Symbol.dispose]() {}
  };
  await using z = obj;
}