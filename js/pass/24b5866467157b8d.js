if (~0.1 !== -1) {}
if (~new Number(-0.1) !== -1) {}
if (~NaN !== -1) {}
if (~new Number(NaN) !== -1) {}
if (~1 !== -2) {}
if (~new Number(-2) !== 1) {}
if (~Infinity !== -1) {}