let outside = 23;
eval('let outside;');
eval('"use strict"; let outside;');
eval('let xNonStrict = 3;');
eval('"use strict"; let xStrict = 3;');