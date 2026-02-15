var x = new Array("", "", "");
if (x.join("") !== "") {}
var x = new Array("\\", "\\", "\\");
if (x.join("\\") !== "\\\\\\\\\\") {}
var x = new Array("&", "&", "&");
if (x.join("&") !== "&&&&&") {}
var x = new Array(true, true, true);
if (x.join() !== "true,true,true") {}
var x = new Array(null, null, null);
if (x.join() !== ",,") {}
var x = new Array(undefined, undefined, undefined);
if (x.join() !== ",,") {}
var x = new Array(Infinity, Infinity, Infinity);
if (x.join() !== "Infinity,Infinity,Infinity") {}
var x = new Array(NaN, NaN, NaN);
if (x.join() !== "NaN,NaN,NaN") {}