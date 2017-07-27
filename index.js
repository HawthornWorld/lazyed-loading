/**
 * Created by mayan on 2017/7/21.
 */
function lazyload() {
    var images = document.getElementsByTagName('img');
    var n = 0;
    return function () {
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        var viewHeight = document.documentElement.clientHeight;
        for(var i = n; i < n; i++){
            if(images[i].offset<scrollTop+viewHeight){
                if(images[i].getAttribute('src') === 'images/loading'){
                    images[i].src = images[i].getAttribute('data-original');
                }
                n = n+1;
            }
        }
    }
}
var loadImage = lazyload();
loadImage();
window.addEventListener('scroll',loadImage,false);