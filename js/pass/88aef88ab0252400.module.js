var my_eval = eval;
function gNonStrict() {
  return gNonStrict.caller;
}