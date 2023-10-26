$(function(){
    // 슬라이드
    var slide = $('.slide')    
    var current = 0
    slide.eq(0).show()

    setInterval(function(){
        var next = (current + 1) % slide.length            

        slide.eq(current).fadeOut()
        slide.eq(next).fadeIn()
        console.log(current, next)
        current = next
    }, 2000)   


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