//ns 12
var cameraModule = require("nativescript-camera");

function onTap() { 
    cameraModule.takePicture()
        .then(function (imageAsset) {
            // access the image here

        });
}
exports.onTap = onTap;