/* Draws the "RETRO" wordmark from an exact-pixel map onto the page canvas.
   The wordmark is lettering, so it is painted pixel-by-pixel here rather than
   shipped as an image. */
(function () {
    var canvas = document.getElementById('wordmark');
    if (!canvas) return;

    var map = (window.LOGO_FRONT && !window.LOGO_DASH) ? LOGO_FRONT : LOGO_DASH;
    var ctx = canvas.getContext('2d');
    var px = 1; /* one map cell = one screen pixel */

    for (var y = 0; y < map.h; y++) {
        var row = map.rows[y];
        for (var x = 0; x < map.w; x++) {
            var i = x * 6;
            ctx.fillStyle = '#' + row.substr(i, 6);
            ctx.fillRect(x * px, y * px, px, px);
        }
    }
})();
