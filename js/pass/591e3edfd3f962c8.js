function thrower() {}
var f = ({[thrower()]: x} = {}) => {};