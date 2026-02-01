function custom() {
  return {
    toString() {}
  };
}
function symbol() {
  return {
    toString() {
      return Symbol();
    }
  };
}