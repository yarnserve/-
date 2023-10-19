$(function(){   
    // 메뉴 
    $('.gnb').hover(
        function(){
            // $(this).find('ul').stop().slideDown()
            $('.sub').stop().slideDown()
        },
        function(){
            // $(this).find('ul').stop().slideUp()
            $('.sub').stop().slideUp()
        },
    )

    // 슬라이드
    setInterval(function(){
        $('.slides').animate({top: '-100%'}, function(){
            $('.slide').first().appendTo('.slides')
            $(this).css('top', 0)
        })
    }, 3000)

    // 탭
    $('.item').eq(0).show()

    $('.titles h3').click(function(){            
        var idx =  $(this).index()
        
        $('.titles h3').removeClass('active')
        $(this).addClass('active')

        $('.item').hide()
        $('.item').eq(idx).show()       
    })
    
    // 모달
    $('#showModal').click(function(){
        $('.modal').show()
    })
    
    $('#closeModal').click(function(){
        $('.modal').hide()
    })    
})