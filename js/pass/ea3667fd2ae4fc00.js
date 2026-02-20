if (isNaN(true + undefined) !== true) {}
if (isNaN(undefined + true) !== true) {}
if (isNaN(new Boolean(true) + undefined) !== true) {}
if (isNaN(undefined + new Boolean(true)) !== true) {}