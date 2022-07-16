function animate(obj, target, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        var left = (target - obj.offsetLeft) / 10;
        left = left >= 0 ? Math.ceil(left) : Math.floor(left);
        // console.log(obj.offsetLeft);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (fn) {
                fn();
            }
        }
        obj.style.left = obj.offsetLeft + left + 'px';
    }, 15)
}