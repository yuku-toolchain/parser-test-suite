var arrayLike = {
  get "0"() {},
  get "4294967295"() {},
  get "4294967296"() {},
  length: 2 ** 32
};
arrayLike.length = 2 ** 32 - 1;
arrayLike.length = 2 ** 32;
arrayLike.length = 2 ** 32 + 1;
arrayLike.length = 2 ** 52 - 2;
arrayLike.length = 2 ** 53 - 1;
arrayLike.length = 2 ** 53;
arrayLike.length = 2 ** 53 + 1;