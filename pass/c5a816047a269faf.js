function g() {
  {
    function f() {
      return 1;
    }
    {
      function f() {
        return 2;
      }
    }
  }
}
g();