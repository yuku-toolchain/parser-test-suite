function testcase() {
  var x = 0;
  function inner() {
    eval("var x = 1");
  }
  inner();
}
testcase();