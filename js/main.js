$(document).ready(function () {
    var includes = $("[data-include]");
    $.each(includes, function () {
        var file = "includes/" + $(this).data("include") + ".html";
        $(this).load(file);
    });
    $(document).on("click", "#menuBtn", function () {
        $(".nav-links").css("left", "0");
    });

    $(document).on("click", "#menuClose", function () {
        $(".nav-links").css("left", "-100%");
    });

    $(document).on("click", ".links li", function () {
        $(this).find("ul.sub-menu").toggleClass("d-block");
        $(this).find(".bx").toggleClass("rotate-180");
    });

    $(document).on("change", "#txtResultType", function () {
        var resultType = $(this).find("option:selected").val();

        if (resultType != 0) {
            $("#txtRollNumber").removeAttr("disabled").removeAttr("readonly");
        } else {
            $("#txtRollNumber")
                .val("")
                .attr("disabled", true)
                .attr("readonly", true);
        }
    });

    // // sidebar open close js code
    $(document).on('click','.htmlcss-arrow',function(){
        $(this).next(".sub-menu").toggleClass("d-block");
    });
    $(document).on('click','#menuBtn',function(){
        $(".nav-links").css("left","0");
    });
    $(document).on('click','#menuClose',function(){
        $(".nav-links").css("left","-100%");
    });

});
