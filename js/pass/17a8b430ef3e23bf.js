if (+"1" !== 1) {}
if (+new Number("-1") !== -1) {}
if (isNaN(+"x") !== true) {}
if (isNaN(+"INFINITY") !== true) {}
if (isNaN(+"infinity") !== true) {}