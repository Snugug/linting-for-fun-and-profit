/*global document: false */
/*global Reveal: false */
(function () {
    'use strict';

    Reveal.addEventListener('slidechanged', function () {
        var sassLintVideo = document.getElementById('sass-lint-video');

        sassLintVideo.playbackRate = 0.75;
    });
})();
