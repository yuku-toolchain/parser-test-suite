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
var arr = Uint8Array.fromBase64("x-_y", base64UrlOptions);
var lastChunkHandlingAccesses = 0;
var strictOptions = {};
Object.defineProperty(strictOptions, "lastChunkHandling", {
  get: function () {
    lastChunkHandlingAccesses += 1;
    return "strict";
  }
});
var arr = Uint8Array.fromBase64("Zg==", strictOptions);