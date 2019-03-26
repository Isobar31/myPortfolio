// // For testing slide show
$(document).ready(function(){
    $("slideBoard").each(function(index, el){
        var setting = {
            "response" : true, afterClickBtnFn :function(i){
                console.log(i);
            }
        };
        switch(index){
            case 0:
                setting.verticalAlign = "top";
                setting.switching = "custom";
                setting.precentWidth = "25%";

                var api = $(el).dnSlide(setting).data("slidingPage");
                $(".hide").on("click", function(){
                    api.hide(function(){
                        alert('Hidden!!!');
                    });
                });
                $(".show").on("click", function(){
                    api.show(function(){
                        alert('Shown!!!');
                    });
                });
                break;

            case 1:
                setting.autoPlay = true;
                $(el).dnSlide(setting);
                break;

            case 2:
                setting.verticalAlign = "bottom";
                $(el).dnSlide(setting);
                break;

            default :
                $(el).dnSlide(setting);
                break;
        }
    });
});

