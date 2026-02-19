var i = 0;
var bits = {
  valueOf() {
    i++;
    return 0;
  }
};
var bigint = {
  valueOf() {
    i++;
    return 0n;
  }
};
BigInt.asIntN(bits, bigint);