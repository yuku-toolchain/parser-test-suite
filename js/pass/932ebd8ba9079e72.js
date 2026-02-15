async function foo() {
  var thenable = {
    then: 42
  };
  var res = await thenable;
}