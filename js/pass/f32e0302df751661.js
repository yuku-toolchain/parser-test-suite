if ((true & true) !== 1) {}
if ((new Boolean(true) & true) !== 1) {}
if ((true & new Boolean(true)) !== 1) {}
if ((new Boolean(true) & new Boolean(true)) !== 1) {}