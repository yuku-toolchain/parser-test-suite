if (("1" ^ undefined) !== 1) {}
if ((undefined ^ "1") !== 1) {}
if ((new String("1") ^ undefined) !== 1) {}
if ((undefined ^ new String("1")) !== 1) {}