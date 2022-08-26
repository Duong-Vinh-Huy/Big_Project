function init()
{
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
    //xử lí hiệu ứng rê chuột vào ngành học
    let a = document.querySelectorAll(".major-item a");
    for(let s of a)
    {
        
        s.addEventListener("mouseenter", function(){
            setTimeout(function(){
                s.classList.remove("animate__animated");
                s.classList.remove("animate__heartBeat");
                s.classList.remove("animate__repeat-1");
                },1000);
            s.classList.add("animate__animated");
            s.classList.add("animate__heartBeat");
            s.classList.add("animate__repeat-1");
        })

    }


    //xử lí slider
    var imgFeature=document.querySelector('.img-feature img');
    var listDot=document.querySelectorAll('.dot div');//mảng
    var prevBtn= document.querySelector('.prev');
    var nextBtn= document.querySelector('.next');


    var currentIdx = 0;

    function updateFeatureByIndex(idx) // dùng chung cho việc thay đổi ảnh slide
    {
        for(let i = 0; i < listDot.length; i++)
        {
            listDot[i].classList.remove("checked");
        }
        currentIdx = idx;
        imgFeature.src = `/images/tsinh${idx+1}.jpeg`;
        listDot[idx].classList.add("checked");
    }

    for(let i =0; i < listDot.length;i++)
    {
        
        listDot[i].addEventListener("click", function(){
            
            imgFeature.style.animation='';
        setTimeout(function(){
            updateFeatureByIndex(i);
            imgFeature.style.animation= 'slideShow 1.8s ease';
        },0);
        })
        
    }
    prevBtn.addEventListener("click", function(){

        if(currentIdx == 0)
            currentIdx = listDot.length-1;
        else
            currentIdx--;

        imgFeature.style.animation='';
        setTimeout(function(){
            updateFeatureByIndex(currentIdx);
            imgFeature.style.animation= 'slideShow 1s ease';
        },0);
        
    })
    nextBtn.addEventListener("click", function(){
        if(currentIdx == listDot.length-1)
            currentIdx = 0;
        else
            currentIdx++;
        imgFeature.style.animation='';
        setTimeout(function(){
            updateFeatureByIndex(currentIdx);
            imgFeature.style.animation= 'slideShow 1s ease';
        },0);
    })

    //các ô icon
    var colors=["lightblue", "lightgreen", "gold", "orange"];
    let sj = document.querySelectorAll("section.icons div");
    for(let i =0; i< sj.length;i++)
    {
        sj[i].style.backgroundColor = colors[i];
    }

    // chỉ ấn nút add chứ k thêm sự kiện change trong input
    $('#addBtn').on("click",function(){
        let pro = $('#problem').val();
        let h=`<div class="comment">
          <div><i class="fa-solid fa-person-circle-question"></i> :${pro}</div>
          <div>
            <i class="fa-solid fa-user-check"></i> 
            <input type="text" id="answer" placeholder="Giải đáp..."/>
            <input type="button" id="addBtn" value="Add"/>
          </div>
        </div>`

        $('.comments').prepend(h);
    })
    // giải đáp.. cái này bắt sự kiện change... như vậy là đủ 2 sự kiện cho phần comment
    var list=document.querySelectorAll('input#answer');
    for(let s of list)
    {
        
            $(s).on("change",function(){
                let v = $(s).val();
                let h=`<div class="anser-user"><i class="fa-solid fa-user-graduate"></i> ${v}</div>`
                $(s).closest('div').prepend(h);
            })
        
    }
}