var target = new Uint8Array([255, 255, 255]);
$DETACHBUFFER(target.buffer);
var getterCalls = 0;
var targetDetachingOptions = {};
Object.defineProperty(targetDetachingOptions, 'alphabet', {
  get: function () {
    getterCalls += 1;
    $DETACHBUFFER(target.buffer);
    return "base64";
  }
});
var target = new Uint8Array([255, 255, 255]);