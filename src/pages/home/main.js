/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation

    $('.page-scroll').click(function(event) {
        var href = event.currentTarget.href;
        href = href.substring(window.location.origin.length + window.location.pathname.length, href.length);
        console.log($(href));
        $('html, body').animate({
            scrollTop: $(href).offset().top
        });
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
