function callbackfn(val, idx, obj) {
  return this.valueOf() === "abc";
}