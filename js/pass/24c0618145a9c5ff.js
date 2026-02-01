if ((true).toString() !== "true") {}
if ((false)["toString"]() !== "false") {}
if (new Boolean(true).toString() !== "true") {}
if (new Boolean(false)["toString"]() !== "false") {}