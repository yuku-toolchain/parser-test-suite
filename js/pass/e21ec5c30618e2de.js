var newTarget = null;
var getNewTarget = function () {
  newTarget = eval('new.target;');
};
getNewTarget();
new getNewTarget();