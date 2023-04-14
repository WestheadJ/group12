$(function(){
    $('a').each(function(){
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active'); $(this).parents('li').addClass('active');
        }
    });
});

// REFERENCE FOR CODE: https://stackoverflow.com/questions/26819675/navbar-highlight-for-current-page (Used the code from the user "thomas0721"'s response)