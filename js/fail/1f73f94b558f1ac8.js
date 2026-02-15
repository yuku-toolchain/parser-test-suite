var values = [];
var p = Promise.resolve().then(() => {
  p = Promise.resolve().then(() => {
    p = Promise.resolve().then(() => {
      values.push(3);
      return false;
    });
    values.push(2);
    return true;
  });
  values.push(1);
  return true;
});
while (await p) {}