$(".counter").each(function () {
    var $this = $(this);
    var countTo = parseInt($this.attr("data-target"));

    $({ countNum: parseInt($this.text()) }).animate(
        {
            countNum: countTo,
        },
        {
            duration: 4000,
            easing: "linear",
            step: function () {
                var currentValue = Math.floor(this.countNum).toString();
                var convertedValue = currentValue.replace(
                    /\d/g,
                    function (match) {
                        return String.fromCharCode(2534 + parseInt(match));
                    }
                );
                $this.text(convertedValue);
            },
            complete: function () {
                var finalValue = countTo.toString();
                var convertedFinalValue = finalValue.replace(
                    /\d/g,
                    function (match) {
                        return String.fromCharCode(2534 + parseInt(match));
                    }
                );
                $this.text(convertedFinalValue);
            },
        }
    );
});
// Images and alt attribute

// Gallery image hover
$(".img-wrapper").hover(
    function () {
        $(this).find(".img-overlay").animate({ opacity: 1 }, 600);
    },
    function () {
        $(this).find(".img-overlay").animate({ opacity: 0 }, 600);
    }
);

// Lightbox
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $prevButton = $(
    '<div id="prevButton"><i class="fa fa-chevron-left"></i></div>'
);
var $nextButton = $(
    '<div id="nextButton"><i class="fa fa-chevron-right"></i></div>'
);
var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

// Add overlay
$overlay
    .append($image)
    .prepend($prevButton)
    .append($nextButton)
    .append($exitButton);
$("#gallery").append($overlay);

// Hide overlay on default
$overlay.hide();

// When an image is clicked
$("#image-gallery .image").click(function (event) {
    event.preventDefault();
    var imageLocation = $(this).find(".img-wrapper a").attr("href");
    $image.attr("src", imageLocation);
    $overlay.fadeIn("slow");
});

$overlay.click(function () {
    $(this).fadeOut("slow");
});

// When next button is clicked
$nextButton.click(function (event) {
    $("#overlay img").hide();
    var $currentImgSrc = $("#overlay img").attr("src");
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    var $nextImg = $($currentImg.closest(".image").next().find("img"));
    var $images = $("#image-gallery img");
    if ($nextImg.length > 0) {
        $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    } else {
        $("#overlay img").attr("src", $($images[0]).attr("src")).fadeIn(800);
    }
    event.stopPropagation();
});

$prevButton.click(function (event) {
    $("#overlay img").hide();
    var $currentImgSrc = $("#overlay img").attr("src");
    var $currentImg = $('#image-gallery img[src="' + $currentImgSrc + '"]');
    var $nextImg = $($currentImg.closest(".image").prev().find("img"));
    $("#overlay img").attr("src", $nextImg.attr("src")).fadeIn(800);
    event.stopPropagation();
});

// When the exit button is clicked
$exitButton.click(function () {
    $("#overlay").fadeOut("slow");
});
