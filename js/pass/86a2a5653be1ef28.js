var f_arg = function (x, y) {
  return arguments;
};
if (f_arg(1, 2, 3).length !== 3) {}
if (f_arg(1)[0] !== 1) {}
if (f_arg(1, 2)[1] !== 2) {}
if (f_arg(1, 2, 3)[2] !== 3) {}
if (f_arg(1, 2, 3)[3] !== undefined) {}
if (f_arg.length !== 2) {}