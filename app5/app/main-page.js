// ns8

var frameModule = require("ui/frame");
var topmost;

function onLoaded(args) {
    // topmost is reference to the top UI frame 
    topmost = frameModule.topmost();
}
exports.onLoaded = onLoaded;

function onTap() {
    // navigate accepts optional parameters to:
    // 1. add navigation transitions
    // 2. pass data (or context) to the next page
    // 3. clear navigation history
    topmost.navigate("detail");
}
exports.onTap = onTap;