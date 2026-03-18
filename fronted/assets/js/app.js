$(document).ready(function() {
    var $width = $(window).width();
    var topImageAspectRatio = 1684 / 223;
    var mapAR = 363 / 181;
    $("#globe").height($("#globe").width() / mapAR);

    var logoHeight = $("#logo").height();
    if ($width >= 768) {
        $("#top-image").css({
            height: $width / topImageAspectRatio + "px",
            "background-position": "center center"
        });
    }
    if ($width < 768) {
        $("#top-image").css({
            height: 2 * $width / topImageAspectRatio + "px",
            "background-position": "center center"
        });
    }
    if ($width < 480) {
        $("#top-image").css({
            height: 3 * $width / topImageAspectRatio + "px",
            "background-position": "center center"
        });
    }
    $(".iso-container").height(logoHeight);


    $(window).on("resize", function(e) {
        $width = $(window).width();
        logoHeight = $("#logo").height();
        $(".iso-container").height(logoHeight);
        if ($width >= 768) {
            $("#top-image").css({
                height: $width / topImageAspectRatio + "px",
                "background-position": "center center"
            });
        }
        if ($width < 768) {
            $("#top-image").css({
                height: 2 * $width / topImageAspectRatio + "px",
                "background-position": "center center"
            });
        }
        if ($width < 480) {
            $("#top-image").css({
                height: 3 * $width / topImageAspectRatio + "px",
                "background-position": "center center"
            });
        }

        $("#globe").height($("#globe").width() / mapAR);
    });
});