class C {
  m() {
    function fn() { (() => {})().#x }
  }
}