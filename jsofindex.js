function init()
    {
        // scroll chuột
        $(window).scroll(function()
        {
            if($(this).scroll)
            $('nav.menu-nav').addClass('sticky');
            else
            $('nav.menu-nav').removeClass('sticky');
        })

        // CLick nút xem tất cả và rút gọn
        $(".view-all").click(function()
        {
            $(".new, .events").css({
                "overflow":"auto",
            })
            $(".rutGon").css({
                "display":"block",
            })
            $(".view-all").css({
                "display":"none",
            })
        })
        $(".rutGon").click(function()
        {
            $(".new, .events").css({
                "overflow":"hidden",
            })
            $(".view-all").css({
                "display":"block",
            })
            $(".rutGon").css({
                "display":"none",
            })
            
        })


        // di chuột vào bản tin
        // $("div.picture").click(function()
        // {
        //     $(".full-info").css({
        //         "display":"block",
        //     })
        // })

    }

