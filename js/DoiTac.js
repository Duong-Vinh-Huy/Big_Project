function init()
{
    $(window).scroll(function()
        {
            if($(this).scroll)
            {
                $('nav.menu-nav').addClass('sticky');
                $('nav.menu-nav').css({
                    "z-index":"9999",
                })
            }
            else
            $('nav.menu-nav').removeClass('sticky');
        })

        $('#goTop').hide();
        $(window).scroll(function()
        {
            if($(this).scrollTop() >= 200)
            $('#goTop').show("slow");
            else
            $('#goTop').hide("slow");
        })

        $("#goTop").click(function(){
            $("html, body").animate({
                scrollTop: 0,}
            ,1000)
        });
}