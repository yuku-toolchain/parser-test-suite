var str = 'undefined is not a function';
var result = str.split(undefined, 1);
result = str.split(undefined, 2);
result = str.split(undefined, undefined);
result = str.split(undefined, true);
result = str.split(undefined, 2 ** 32 + 1);
result = str.split(undefined, 2 ** 31);
result = str.split(undefined, 2 ** 16);
result = str.split(undefined, {
  valueOf() {
    return 1;
  }
});