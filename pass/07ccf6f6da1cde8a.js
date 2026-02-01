if (!(1 !== new Number(1))) {}
if (!(1 !== true)) {}
if (!(1 !== new Boolean(1))) {}
if (!(1 !== "1")) {}
if (!(1 !== new String(1))) {}
if (!(new Number(0) !== 0)) {}
if (!(false !== 0)) {}
if (!(new Boolean(0) !== 0)) {}
if (!("0" !== 0)) {}
if (!(new String(0) !== 0)) {}
if (!(1 !== ({
  valueOf: function () {
    return 1;
  }
}))) {}