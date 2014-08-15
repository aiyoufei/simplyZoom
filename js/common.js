$.fn.imgZoom = function () {
    if (typeof $(this).find('.process-img')[0].naturalWidth == "undefined") { 
        var imgObj = new Image(); 
        imgObj.src = $(this).find('.process-img')[0].src; 
        var imgNaturalWidth = imgObj.width,
            imgNaturalHeight = imgObj.height; 
    } else { 
        var imgNaturalWidth = $(this).find('.process-img')[0].naturalWidth, 
            imgNaturalHeight = $(this).find('.process-img')[0].naturalHeight;
    }

    var boxClientWidth = $(this)[0].offsetWidth,
        boxClientHeight = $(this)[0].offsetHeight,
        zoomImg = $(this).find('.process-img'),
        zoomBox = $(this),
        ratio = imgNaturalWidth/boxClientWidth;
    zoomBox.mouseover(function(event) {
        zoomImg.css({
            width: imgNaturalWidth + "px",
            height: imgNaturalHeight + "px",
            position: "relative"
        });
        zoomBox.css({
            width: boxClientWidth + "px",
            height: boxClientHeight + "px",
        });
    });
    zoomBox.mouseout(function(event) {
        zoomImg.removeAttr('style');
        zoomBox.removeAttr('style');
    });
    zoomBox.mousemove(function(event) {
        var innerX = event.clientX - zoomBox[0].offsetLeft + ($(document).scrollLeft()),
            innerY = event.clientY - zoomBox[0].offsetTop + ($(document).scrollTop());
        zoomImg.css({
            left: -(innerX.valueOf()*(ratio-1)) + "px",
            top: -(innerY.valueOf()*(ratio-1)) + "px"
            // left: -(imgNaturalWidth - boxClientWidth - innerX.valueOf()*(ratio-1)) + "px",
            // top: -(imgNaturalHeight - boxClientHeight - innerY.valueOf()*(ratio-1)) + "px"
        });
    });
}
