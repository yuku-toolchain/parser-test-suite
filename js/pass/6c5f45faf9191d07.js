if (isNaN(+undefined) !== true) {}
if (isNaN(+void 0) !== true) {}
if (isNaN(+eval("var x")) !== true) {}