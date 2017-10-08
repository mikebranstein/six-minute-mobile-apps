// ns3
var page;

function onLoaded(args) {
    page = args.object;
}
exports.onLoaded = onLoaded;

// ns4
var viewModule = require("ui/core/view");

var count = 0;

function onButtonTap() {
    count++;
    
    var label = viewModule.getViewById(page, "label");
    label.text = "Click count: " + count;
}
exports.onButtonTap = onButtonTap;