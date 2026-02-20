var thenable = {
  then: function (resolve, reject) {
    resolve(42);
  }
};
async function foo() {}