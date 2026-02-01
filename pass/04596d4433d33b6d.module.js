var completed = 0;
var p = Promise.resolve(true);
if (await p) {
  completed += 1;
}