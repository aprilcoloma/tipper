( function ($ ) {
    $.fn.tipper = function() {

        var tipper = $( document ).find( '.tipper' );

        tipper.each(function() {
            var thisTipper = $( this ),
                tipperText = thisTipper.data('tooltip-title'),
                tipperTextWrapper = $( '<div class="tipper-item tipper-default" style="display:none;">' + tipperText + '</div>' ),
                tipperParent = thisTipper.parent();

            thisTipper.on( 'mouseover', function() {
                tipperTextWrapper
                 .hide()
                  .appendTo( 'body' )
                   .stop(true, true)
                    .fadeIn('slow');

                // console.log( 'tipper: ' + tipper.position().top );
                // console.log( 'tipperTextWrapper: ' + tipperTextWrapper.offset().top );
                // console.log( 'tipperParent: ' + tipperParent.position().top );


                tipperTextWrapper.css( { 
                    'top':  ( thisTipper.offset().top - 42 ) + 'px',
                    'left': thisTipper.offset().left - ( tipperTextWrapper.outerWidth(true) / 2 )  + ( thisTipper.outerWidth(true) / 2 ) + 'px'
                });

                if ( thisTipper.offset().top < 20 ) {
                    tipperTextWrapper.css( 'top',  ( tipperParent.offset().top + 20 ) + 'px' );
                }

                if ( tipperTextWrapper.offset().left < 10 ) {
                    tipperTextWrapper.css( 'left', '10px' );
                }

            });

            thisTipper.on( 'mouseout', function() {
                tipperTextWrapper
                 .stop(true, true)
                  .fadeOut('slow')
                   .detach();
            });

        });

    };

} ( jQuery ));

