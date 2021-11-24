$(".card").on('mouseover',function () {
    $('#'+$(this).attr("id")+" img:nth-child(2)").removeClass('hidden')
    $('#'+$(this).attr("id")+" img:nth-child(2)").addClass('active') 
})
$(".card").on('mouseout',function () {
    $('#'+$(this).attr("id")+" img:nth-child(2)").removeClass('active')
    $('#'+$(this).attr("id")+" img:nth-child(2)").addClass('hidden') 
})
var leftValue = $('.left').html()
var centervalue = $(".menu-navigation").html()
var rightvalue = $(".right").html()
if($(window).width() <= 800){
    $(".menu-navigation").html(leftValue)
    $('.left').html(rightvalue)
    $(".right").html("<button>Menu</button>")
}
$(window).resize(function () {
    if($(this).width() <= 800){
        $(".menu-navigation").html(leftValue)
        $('.left').html(rightvalue)
        $(".right").html("<button>Menu</button>")
    }else{
        $(".menu-navigation").html(centervalue)
        $('.left').html(leftValue)
        $(".right").html(rightvalue)
    }
})
$(".btn-scroll-top button").click(function() {
   $(window).scrollTop(0)
})
var el = document.querySelector('.actuality-section')

var intersection = new IntersectionObserver((ele)=>{
    if(ele[0].intersectionRatio > 0){
       console.log("DDD")
    }
})
intersection.observe(el)
