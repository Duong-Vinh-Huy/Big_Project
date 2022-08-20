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

        


        var colors=["blue", "darkblue", "green", "gold", "red", "idianred", "purple",
                    "goldenrod", "gray", "greenyellow"];
        let sj = document.querySelectorAll(".month");
        for(let i of sj)
        {
            let idx= parseInt(Math.random() * colors.length);
            i.style.backgroundColor = colors[idx];
        }
    }

