var nativeErrors = [EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError];
for (var i = 0; i < nativeErrors.length; ++i) {
  var nativeError = nativeErrors[i];
  var message = "my-message";
  var error = new nativeError(message);
}