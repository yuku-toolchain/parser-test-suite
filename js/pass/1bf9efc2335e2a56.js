var toStringCalls = 0;
var throwyToString = {
  toString: function () {
    toStringCalls += 1;
  }
};
var alphabetAccesses = 0;
var base64UrlOptions = {};
Object.defineProperty(base64UrlOptions, "alphabet", {
  get: function () {
    alphabetAccesses += 1;
    return "base64url";
  }
});
var array = new Uint8Array([0]);
var receiverMutatingOptions = {};
Object.defineProperty(receiverMutatingOptions, "alphabet", {
  get: function () {
    array[0] = 255;
    return "base64";
  }
});
var result = array.toBase64(receiverMutatingOptions);