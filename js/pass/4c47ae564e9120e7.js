if ((true & undefined) !== 0) {}
if ((undefined & true) !== 0) {}
if ((new Boolean(true) & undefined) !== 0) {}
if ((undefined & new Boolean(true)) !== 0) {}