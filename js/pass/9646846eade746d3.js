var callCount = 0;
var obj = {
  async method() {
    callCount++;
  }
};
obj.method().then(() => {}, $DONE).then($DONE, $DONE);