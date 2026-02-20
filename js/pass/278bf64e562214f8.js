var callCount = 0;
var obj = {
  async *method() {
    callCount++;
  }
};
obj.method().next().then(() => {}, $DONE).then($DONE, $DONE);