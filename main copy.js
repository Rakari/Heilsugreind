/*jslint browser: true*/
/*global $, jQuery, alert*/

function main() {
    "use strict";
    var parallax = $(".image"),
        speed = 0.95;
    
    window.onscroll = function () {
        [].slice.call(parallax).forEach(function (el, i) {

            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

            el.style.backgroundPosition = elBackgrounPos;
        });
        
        if (window.scrollY >= 1) {
            $(".menu").addClass("scroll");
            $(".menu a, a:link, a:visited, li").addClass("fontScroll");
        } else if (window.scrollY === 0) {
            $(".menu").removeClass("scroll");
            $(".menu a, a:link, a:visited, li").removeClass("fontScroll");
        }
    };
}
    
    

$(document).ready(main);