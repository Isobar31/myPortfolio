$(document).ready(function(){
    $(".fa-times").hide();
    $(".menuIcon").css("background-color", "transparent");
    // $(".dropdown").hide(); 

    $(".fa-bars").click(function(){
        $(this).hide();
        $(".fa-times").show();
        $(".menuIcon").css("background-color", "#808080");
        $(".navbarSubMob").show();
    });

    $(".fa-times").click(function(){
        $(this).hide();
        $(".fa-bars").show();
        $(".menuIcon").css("background-color", "transparent");
        $(".navbarSubMob").hide();
    });
});
