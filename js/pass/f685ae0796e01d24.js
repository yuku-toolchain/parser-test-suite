if ("1" === new String("1")) {}
if ("1" === true) {}
if ("1" === new Boolean("1")) {}
if ("1" === 1) {}
if ("1" === new Number("1")) {}
if (new String(false) === false) {}
if (false === "0") {}
if ("0" === new Boolean("0")) {}
if (false === 0) {}
if (false === new Number(false)) {}
if ("1" === ({
  valueOf: function () {
    return "1";
  }
})) {}