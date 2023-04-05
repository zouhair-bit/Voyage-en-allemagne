const $ = require('jquery');

console.log("js live");

$(".images img").click(function(){
    console.log("click")
    $("#full-image").attr("src", $(this).attr("src"));
    $('#image-viewer').show();
});

$("#image-viewer .close").click(function(){
    $('#image-viewer').hide();
});
