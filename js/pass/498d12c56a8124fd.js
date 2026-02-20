var re = /x/;
if (typeof re === 'function') {
  Function.prototype.bind.call(re, undefined);
} else {
  try {
    Function.prototype.bind.call(re, undefined);
  } catch (e) {}
}