jQuery(document).ready(function($) {


     $('.sidenav-left').hide();
     $('.sidenav-right').hide();

    $('.close_icon').click(function(event) {
        /* Act on the event */
        $('.sidenav-left').css({
            transform : 'translateX(-100%)',
            transition: 'transform 0.95s ease-in'
        }).show();
        $('.sidenav-right').css({
            transform : 'translateX(100%)',
            transition: 'transform 0.95s ease-in'
        }).show();
    });

    $('.menu_icon').click(function(event) {
        /* Act on the event */
         $('.sidenav-left').css({
            transform : 'translateX(0)',
            transition: 'transform 0.95s ease-in'
        }).show();
          $('.sidenav-right').css({
            transform : 'translateX(0)',
            transition: 'transform 0.95s ease-in'
        }).show();
    });

     

});


