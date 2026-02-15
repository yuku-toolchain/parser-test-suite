let outside = 23;
(0, eval)('let outside;');
(0, eval)('"use strict"; let outside;');
(0, eval)('let xNonStrict = 3;');
(0, eval)('"use strict"; let xStrict = 3;');