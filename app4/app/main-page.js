// ns6
var Observable = require("data/observable").Observable;

var page;
var viewModel = new Observable();

function onLoaded(args) {
    page = args.object;
    page.bindingContext = viewModel;
    viewModel.set("count", 0);
}
exports.onLoaded = onLoaded;

function onButtonTap() {
    var currentCount = viewModel.get("count");
    viewModel.set("count", currentCount + 1);
}
exports.onButtonTap = onButtonTap;