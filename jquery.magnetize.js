/*! jquery.magnetize.js - v0.1 - 2014-12-12
 * Author : Carlos Herrera <carlos@fusepartners.com.au>
 * Copyright (c) 2014 Fuse Partners; Licensed MIT */

(function( $ ) {
 
    $.fn.magnetize = function(options) {
    	
    	this.each(function() {
    		var drop = $( this );
    		var settings = $.extend({
                // These are the defaults.
                'leftop'  : "+=",
                'topop'   : "+=",
                'drag'	  : drop.data('drag'),
                'animate' : 'animate'
            }, options );
    		
            var drag = $(settings.drag);
            
            var _y=(drop.offset().top -drag.offset().top);
            var _x=(drop.offset().left-drag.offset().left);        
            
            switch (settings.animate) {
            case 'animate':	drag.animate({left:settings.leftop + _x , top :settings.topop + _y});break;
            case 'fade'   : drag.css({left:settings.leftop + _x , top :settings.topop + _y,opacity:0.1});drag.animate({opacity:1});break;
            default 	  :	drag.css({left:settings.leftop + _x , top :settings.topop + _y});
            }
            
        });
 
        return this;
 
    };
 
}( jQuery ));