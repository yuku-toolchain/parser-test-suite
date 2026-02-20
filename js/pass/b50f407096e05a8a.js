function StopReverse() {}
var arrayLike = {
  get "9007199254740990"() {
    throw new StopReverse();
  },
  get "9007199254740991"() {},
  get "9007199254740992"() {},
  length: 2 ** 53 + 2
};