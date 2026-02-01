if (("1" ^ null) !== 1) {}
if ((null ^ "1") !== 1) {}
if ((new String("1") ^ null) !== 1) {}
if ((null ^ new String("1")) !== 1) {}