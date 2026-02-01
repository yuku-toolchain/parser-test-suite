var str = 'undefined is not a function';
var result = str.split(undefined, 0);
result = str.split(undefined, false);
result = str.split(undefined, null);
result = str.split(undefined, {
  valueOf() {
    return undefined;
  }
});
result = str.split(undefined, {
  valueOf() {
    return 0;
  }
});
result = str.split(undefined, NaN);
result = str.split(undefined, 2 ** 32);
result = str.split(undefined, 2 ** 33);