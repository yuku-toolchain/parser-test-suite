var viaMember, viaCall;
var obj = {
  method: function () {
    viaCall = this;
  },
  get attribute() {
    viaMember = this;
  }
};
with (obj) {
  method();
  attribute;
}