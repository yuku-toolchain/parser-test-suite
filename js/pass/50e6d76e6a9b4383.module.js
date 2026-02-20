let callCount = 0;
let ref = async function BindingIdentifier() {
  callCount++;
  eval("BindingIdentifier = 1");
  return BindingIdentifier;
};