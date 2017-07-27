/**
 * Created by mayan on 2017/7/21.
 */
function throttle(fn, delay, atleast) {
    var timeout = null,
        startTime = new Date();
    return function() {
        var curTime = new Date();
        clearTimeout(timeout);
        if(curTime - startTime >= atleast) {
            fn();
            startTime = curTime;
        }else {
            timeout = setTimeout(fn, delay);
        }
    }
}
var n = 0;
var images = document.getElementsByTagName('img');
function lazyload() {
    return function () {
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        var viewHeight = document.documentElement.clientHeight;
        for(var i = n; i < images.length; i++){
            if(images[i].offsetTop < scrollTop + viewHeight){
                if(images[i].getAttribute('src') === 'images/loading.gif'){
                    images[i].src = images[i].getAttribute('data-original');
                }
                n++;
            }
        }
    }
}
var loadImages = lazyload();
loadImages();
window.addEventListener('scroll', throttle(loadImages, 500, 1000), false);
