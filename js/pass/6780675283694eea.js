class outside {}
eval('class outside {}');
eval('"use strict"; class outside {}');
eval('class xNonStrict {}');
eval('"use strict"; class xStrict {}');