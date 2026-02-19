var other = $262.createRealm().global;
var wrapped = other.Object(other.BigInt(100));
other.BigInt.prototype.toJSON = function () {
  return this.toString();
};