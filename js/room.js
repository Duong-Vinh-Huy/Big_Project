let Mau = ['#13a89e','#ffb229','#00a5e3','#ff5722','#673ab7','#b5d56a','#4886ff','#c70000'];

$(document).ready(function(){
    $("div.place > div.titles > div.Menu").addClass("wow animate__slideInLeft")
    $("div.place > div.titles > div.title").addClass("wow animate__fadeIn")
    wow = new WOW({
        boxClass:     'wow',      
        animateClass: 'animate__animated', 
        offset:       0,          
        mobile:       true,       
        live:         true        
      })
      wow.init();
})

function init(){
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
    let Obj=document.querySelectorAll(".title h3 > a");
    for(let s of Obj){
        let arr = parseInt(Math.random()*Mau.length);
       s.style.background=Mau[arr];
    }
}

function imgFirst(){
    document.getElementById("slideShow").src="/images/banner_0.jpg";
}
function imgLast(){
     document.getElementById("slideShow").src="/images/banner_3.jpg";
}
function imgPrev(){
    document.getElementById("slideShow").src="/images/banner_1.jpg";
}
function imgNext(){
    document.getElementById("slideShow").src="/images/banner_2.jpg";
}