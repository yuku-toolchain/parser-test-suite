class C {
  f = function() { (() => this)().#x }
}