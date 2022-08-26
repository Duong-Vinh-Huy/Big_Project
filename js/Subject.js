$(document).ready(function(){
    $("div.figure > .item").addClass("wow animate__fadeInUp")
    $("div.first > .item").addClass("animate__animated animate__fadeInUp")
    wow = new WOW({
        boxClass:     'wow',      // default
        animateClass: 'animate__animated', // default
        offset:       0,          // default
        mobile:       true,       // default
        live:         true        // default
      })
      wow.init();
      //scroll chuột
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
})