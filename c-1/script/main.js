$(function(){
    // 슬라이드
    var slide = $('.slide')    
    var current = 0    
    slide.eq(current).show()

    setInterval(function(){
        var next = (current + 1) % slide.length            

        slide.eq(current).fadeOut()
        slide.eq(next).fadeIn()
        current = next
    }, 3000)   


    // 메뉴
    var gnb = $('.gnb > li')

    gnb.hover(
        function() {
            $(this).find('ul').stop().slideDown()
        },
        function() {
            $(this).find('ul').stop().slideUp()
        }
    )
})