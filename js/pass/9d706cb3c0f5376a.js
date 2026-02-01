var x = NaN;
var x_geq_0 = x >= 0.0;
var x_leq_0 = x <= 0.0;
var x_leq_0_OR_geq_0 = x <= 0.0 || x >= 0.0;
var x_geq_0_ADD_leq_0 = (x >= 0.0) + (x <= 0.0);
if (x_geq_0) {}
if (x_leq_0) {}
if (x_leq_0_OR_geq_0) {}
if (x_geq_0_ADD_leq_0) {}