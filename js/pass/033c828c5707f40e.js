var proto = {
  rootprop: "avis"
};
function AVISFACTORY(name) {
  this.name = name;
}
AVISFACTORY.prototype = proto;
var seagull = new AVISFACTORY("seagull");