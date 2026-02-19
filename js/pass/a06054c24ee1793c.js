var funObj = new Function("a", "eval('public = 1;'); 'use strict'; anotherVariable = 2;");
funObj();