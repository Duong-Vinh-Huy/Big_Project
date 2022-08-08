function init()
    {
        $(window).scroll(function()
        {
            if($(this).scroll)
            $('nav.menu-nav').addClass('sticky');
            else
            $('nav.menu-nav').removeClass('sticky');
        })
    }

