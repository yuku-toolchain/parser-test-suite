function gNonStrict() {
  return gNonStrict.caller || gNonStrict.caller.throwTypeError;
}