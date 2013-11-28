/**!
 * Display a splash page
 *
 * @copyright       Copyright 2013, Greenpeace International
 * @license         MIT License (opensource.org/licenses/MIT)
 * @version         0.0.1
 * @requires        <a href="http://jquery.com/">jQuery 1.1.4+</a>
 * @example         $.p3.lightbox([options]);
 */
/* global jQuery */
(function($, w, d) {
    'use strict';

    var _p3 = $.p3 || {},
        defaults = {
            url : location.href,
            msg : document.title
        };

    _p3.social_sharing = function(el, options) {
        var config = $.extend(true, defaults, options || {}),
            $window = $(w),
            onFacebookClick = function()  {
                w.open(
                    'http://www.facebook.com/sharer.php?u=' +
                    encodeURIComponent(config.url) +
                    '&t='+encodeURIComponent(config.msg),
                    'sharer',
                    'toolbar=0,status=0,width=626,height=436'
                );
            }, 
            onTwitterClick = function() {   
                w.open(
                    'http://twitter.com/intent/tweet?text='+
                    encodeURIComponent(config.msg),
                    'sharer',
                    'toolbar=0,status=0,width=626,height=436'
                );
            };

        function main() {
            $('.social-share .facebook a').click(function(){onFacebookClick();});
            $('.social-share .twitter a').click(function(){onTwitterClick()});
        }
        main();
    };

    $.p3 = _p3;

}(jQuery, this, document));
