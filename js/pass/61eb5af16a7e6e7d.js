var result;
function MyCollection() {
  this.args = arguments;
}
result = Array.from.call(MyCollection, {
  length: 42
});