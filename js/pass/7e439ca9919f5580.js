var thisValue = null;
var method = ({
  method() {
    thisValue = this;
  }
}).method;
method();