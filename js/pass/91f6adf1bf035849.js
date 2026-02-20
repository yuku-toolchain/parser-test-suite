var p_zero = +0;
var n_zero = -0;
if (p_zero == n_zero !== true) {}
if (n_zero == 0 !== true) {}
if (p_zero == -0 !== true) {}
if (p_zero === 0 !== true) {}
if (n_zero === -0 !== true) {}