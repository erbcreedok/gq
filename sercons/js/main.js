;(function() {
    var countersAnimate = function() {
        var counters = $('#counters');
        if ( counters.length > 0 ) {

            counters.waypoint( function( direction ) {

                if( direction === 'down' && !$(this.element).hasClass('animated') ) {

                    setTimeout(function() {
                        counters.find('.js-counter').countTo({
                            formatter: function (value, options) {
                                return value.toFixed(options.decimals);
                            },
                        });
                    }, 400);

                    $(this.element).addClass('animated');

                }
            } , { offset: '80%' } );

        }
    };

    countersAnimate();
})();
