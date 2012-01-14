javascript: (function() {
    var byClass = [
            ['mitem', 20], // number is the magnitude of the "vibration" in degrees
            ['g', 10]
        ],
        byId = [
            ['gbqff', 10], // search fieldset
            ['gbq1', 360], // logo, doodle
            ['gbql', 360], // logo
            ['gbqfb', 100], // button
            ['center_col', 6],
            ['appbar', 6],
            ['navcnt', 100], // Goooooogle
            ['bms',20], // secondary sidebar
            ['ms', 30], // main sidebar
            ['gbvg', 100] // sign in button
        ],
        byTag = [
            ['body', 4]
        ],
        a, b, 
        nervify = function nervify (el, check, embignitude) {
            var e = embignitude || 6; 
            try { el.style.webkitTransition = ''; } catch(e) { return; }
            (function(lel) {
                var m = setInterval(function() {
                    var x = Math.floor(Math.random() * e) / 2 - (e / 4),
                        y = 'rotate(' + x + 'deg)';
                    lel.style.webkitTransform = y;
                }, 25);
                check.addEventListener('keyup', function() {
                    if (check.value !== 'nervous') {
                        clearInterval(m);
                        lel.style.webkitTransition = 'all 1s ease-out';
                        lel.style.webkitTransform = 'rotate(0deg)';
                    }
                });
            }(el));
        };
    try {
        if (!location.host.match(/google\.com/)) {
            throw "No Goog";
        }
        a = document.getElementById('gbqfq'); // query field
        b = a.value;
    } catch (e) {
        alert('Something\'s wrong. Doesn\'t look like Google Search.');
        return;
    }
    if (b === 'nervous') {
        for (var i = 0, j = byId.length; i < j; i++) { 
            nervify( document.getElementById(byId[i][0]), a, byId[i][1] );
        }
        for (var i = 0, j = byClass.length; i < j; i++) {
            var els = document.getElementsByClassName(byClass[i][0]);
            for (var m = 0, n = els.length; m < n; m++) {
                nervify(els[m], a, byClass[i][1]);
            }
        }
        for (var i = 0, j = byTag.length; i < j; i++) {
            var els = document.getElementsByTagName(byTag[i][0]);
            for (var m = 0, n = els.length; m < n; m++) {
                nervify(els[m], a, byTag[i][1]);
            }
        } 
    } else {
        alert('Only works if you\'re nervous');
    }
}());