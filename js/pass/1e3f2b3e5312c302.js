if (isNaN("1" / undefined) !== true) {}
if (isNaN(undefined / "1") !== true) {}
if (isNaN(new String("1") / undefined) !== true) {}
if (isNaN(undefined / new String("1")) !== true) {}