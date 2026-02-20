var __string = "Boston, Mass. 02134";
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[0] !== "02134") {}
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[1] !== "02134") {}
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/)[2] !== void 0) {}
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).length !== 3) {}
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).index !== 14) {}
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/).input !== __string) {}