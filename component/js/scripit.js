$(document).ready(function(){
    if ($(window).width()<767){
        $(".footer-links-wrapper").addClass("shoplist-mobile");

    }
    if ($(window).width()>768){
        $(".footer-links-wrapper").removeClass("shoplist-mobile");
        
    }
    $(window).on("resize",function(){
        if ($(window).width()<767){
            $(".footer-links-wrapper").addClass("shoplist-mobile");
    }
    if ($(window).width()>768){
        $(".footer-links-wrapper").removeClass("shoplist-mobile");
        $("ul").show();
    }
    
});
    $(document).on("click",".shoplist-mobile h3",function(){
        $(this).next("ul").slideToggle()
    });
    $(document).on("click",".shoplist-mobile h3",function(){
        $(this).parent().toggleClass("plus cross")
    });

});

console.log($(".footer-links-wrapper"));


