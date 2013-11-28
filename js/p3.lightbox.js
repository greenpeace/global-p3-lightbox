/**!
 * Display a splash page
 *
 * @copyright       Copyright 2013, Greenpeace International
 * @license         MIT License (opensource.org/licenses/MIT)
 * @version         0.0.1
 * @requires        <a href="http://jquery.com/">jQuery 1.1.4+</a>
                    <a href="http://plugins.jquery.com/cookie/">Jquery Cookie</a>
 * @example         $.p3.lightbox([options]);
 */
/* global jQuery */
(function($, w, d) {
    'use strict';

    var _p3 = $.p3 || {},
        defaults = {
            // Selector or object to which the classes are added
            el: 'body',
            // lightbox name used for cookie check
            name: 'default_lightbox',
            // Throttle display event timer in milliseconds
            delay: 1000,
            // Throttle fade in event timer in milliseconds
            ease:600,
        };

    _p3.lightbox = function(options) {
        var config = $.extend(true, defaults, options || {}),
            $window = $(w),
            $el = $(config.el),
            wait = false,
            isCookieSet = function() {
                return ($.cookie(config.name) == 1);
            },
            setCookie = function () {
                $.cookie(config.name,1);
            }

        function main() {
            if (!isCookieSet()) {
                $($el.selector).append("<div class='lightbox'></div>");
                $('.lightbox').hide();
                $('.lightbox').append("<div class='lightbox-content'></div>");
                $('.lightbox-content').append(config.content);
                $('.lightbox').delay(config.delay).fadeIn(config.ease);
                setCookie();
                $('.lightbox .close').click(function(){
                    $('.lightbox').fadeOut(config.ease);
                });
            }
        }
        main();
    };

    $.p3 = _p3;

}(jQuery, this, document));
