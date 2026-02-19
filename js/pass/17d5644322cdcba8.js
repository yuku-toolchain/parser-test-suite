var array = new Uint8Array(2);
var getterCalls = 0;
var receiverDetachingOptions = {};
Object.defineProperty(receiverDetachingOptions, "alphabet", {
  get: function () {
    getterCalls += 1;
    $DETACHBUFFER(array.buffer);
    return "base64";
  }
});
var detached = new Uint8Array(2);
$DETACHBUFFER(detached.buffer);
var getterCalls = 0;
var sideEffectingOptions = {};
Object.defineProperty(sideEffectingOptions, "alphabet", {
  get: function () {
    getterCalls += 1;
    return "base64";
  }
});