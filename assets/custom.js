$(document).ready(function () {
  $("#status").delay(1500).fadeOut();
  $("#preloader").delay(2000).fadeOut("slow");
});  
$(".js-mobile-nav-toggle").click(function () {
    $("body").toggleClass("mobile_menu_opened");
});
$(".search-bar__actions button").click(function () {
    $("body").removeClass("mobile_menu_opened");
});
$(".hero_slider").slick({
    dots: false,
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{ breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
});
$(".product_other_section_slider").slick({
    dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev-arrow"> </button>',
    nextArrow: '<button class="slick-next-arrow"> </button>',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 767, settings: { slidesToShow: 1, slidesToScroll: 1, dots: true, arrows: false } },
    ],
});
$(".product_animated_slider").slick({
    centerMode: true,
    centerPadding: "250px",
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 4,
    speed: 500,          
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: '<button class="slick-prev-arrow"> </button>',
    nextArrow: '<button class="slick-next-arrow"> </button>',
    responsive: [
        { breakpoint: 1600, settings: { centerPadding: "180px", slidesToShow: 3 } },
        { breakpoint: 1199, settings: { centerPadding: "120px", slidesToShow: 3 } },
        { breakpoint: 991, settings: { arrows: true, centerMode: true, autoplay: false, autoplaySpeed: 5000, centerPadding: "80px", slidesToShow: 3 } },
        { breakpoint: 767, settings: { arrows: true, centerMode: true, autoplay: false, autoplaySpeed: 5000, centerPadding: "80px", slidesToShow: 1 } },
    ],
});
$(".product_column").hover(function () {
    $(this).toggleClass("product_column_img_active");
});
$(document).ready(function () {
    $(".popup-youtube").magnificPopup({ type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: false, fixedContentPos: false });
});
$(document).ready(function () {
    $(".video_nav_column:first").addClass("active");
    $(".video_animated_slider").on("beforeChange", function (b, a, d, c) {
        $(".video_nav_column").removeClass("active");
        $(".video-slider-index-" + c).addClass("active");
    });
});
$(document).ready(function () {
    var a = $(".video_animated_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        focusOnSelect: false,
        infinite: false,
        centerMode: false,
        prevArrow: '<button class="slick-prev-arrow"> </button>',
        nextArrow: '<button class="slick-next-arrow"> </button>',
        asNavFor: ".video_slider_nav_inner",
        responsive: [{ breakpoint: 767, settings: { dots: true, arrows: false, slidesToShow: 1 } }],
    });
    $(".video_slider_nav_inner").slick({ slidesToShow: 4, slidesToScroll: 4, asNavFor: ".video_animated_slider", dots: false, centerMode: false, focusOnSelect: true });
    a.on('afterChange', function(event, slick, currentSlide, nextSlide){
      	var pauseVid = $(slick.$slides).find("video");       	
      	$(pauseVid).each(function(){ this.pause() });
        var b = $(slick.$slides[currentSlide]).find("video");      	
        if (b.length > 0) {
          	$(".video_play_btn").addClass("videoPlayHide");             
            $(b).each(function(){ this.play() });
        }
      	 
    });
    $("#video_slider_1, #mobile_video_slider_1").on("ended", function () {
        console.log("video End 1");
        a.slick("slickGoTo", 1);
      	$("#video_slider_2").get(0).play();
      	$("#mobile_video_slider_2").get(0).play();
    });
    $("#video_slider_2, #mobile_video_slider_2").on("ended", function () {
        console.log("video End 2");
        a.slick("slickGoTo", 2);
      	$("#video_slider_3").get(0).play();
      	$("#mobile_video_slider_3").get(0).play();
    });
    $("#video_slider_3, #mobile_video_slider_3").on("ended", function () {
        console.log("video End 3");
        a.slick("slickGoTo", 3);
      	$("#video_slider_4").get(0).play();
      	$("#mobile_video_slider_4").get(0).play();
    });
    $("#video_slider_4, #mobile_video_slider_4").on("ended", function () {
        console.log("video End 4");
        a.slick("slickGoTo", 0);
        $("#video_slider_1").get(0).play();
      	$("#mobile_video_slider_1").get(0).play();
    });
});
$(document).ready(function () {
    var a = $(".blends_step_slider").slick({
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        mobileFirst: true,
        infinite: false,
        responsive: [{ breakpoint: 767, settings: "unslick" }],
    });
    if ($(window).innerWidth() <= 767) {
        a.on("afterChange", function (d, c, e) {
            var b = $(c.$slides[e]).find("video");
            if (b.length > 0) {
                a.slick("slickPause");
                $(b).get(0).play();
            }
        });
        $("#home_blends_video_1, #blends_video_1").on("ended", function () {
            console.log("End 1");
            a.slick("slickGoTo", 1);
        });
        $("#home_blends_video_2, #blends_video_2").on("ended", function () {
            console.log("End 2");
            a.slick("slickGoTo", 2);
        });
        $("#home_blends_video_3, #blends_video_3").on("ended", function () {
            console.log("End 3");
            a.slick("slickGoTo", 0);
        });
    }
});
$(".recipes_mobile_slider").slick({
    dots: true,
    arrows: true,
    prevArrow: '<button class="slick-prev-arrow"> </button>',
    nextArrow: '<button class="slick-next-arrow"> </button>',
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 992, settings: { arrows: false, slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: "30px" } },
        { breakpoint: 767, settings: { arrows: false, slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: "30px" } },
    ],
});
      
$('.video_play_btn svg').click(function () {
  $(".video_play_btn").addClass("videoPlayHide");
  var mediaVideos = $("#video_slider_1, #mobile_video_slider_1");
  mediaVideos.each(function() {
    var mediaVideo = this;

    if (mediaVideo.paused) {
      mediaVideo.play();
    } else {
      mediaVideo.pause();
    }
  });  
}); 
$('.firstvideoSlide').click(function () {
  $(".video_play_btn").addClass("videoPlayHide"); 
});      
$(".recipes_listing_slider").slick({
    dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev-arrow"> </button>',
    nextArrow: '<button class="slick-next-arrow"> </button>',
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 992, settings: { dots: true, arrows: false, slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: "30px" } },
        { breakpoint: 767, settings: { dots: true, arrows: false, slidesToShow: 1, slidesToScroll: 1, centerMode: true, centerPadding: "30px" } },
    ],
});
$(document).ready(function () {
    $(".mobile_single_slider").slick({ slidesToShow: 1, slidesToScroll: 1, dots: true, arrows: false, mobileFirst: true, infinite: false, responsive: [{ breakpoint: 767, settings: "unslick" }] });
});
$(document).ready(function () {
    $(".mobile_third_slider").slick({ slidesToShow: 3, slidesToScroll: 1, dots: true, arrows: false, mobileFirst: true, infinite: false, responsive: [{ breakpoint: 767, settings: "unslick" }] });
});
$(".product-media-full").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: '<button class="slick-prev-arrow"> </button>',
    nextArrow: '<button class="slick-next-arrow"> </button>',
    asNavFor: ".product-media-thumb",
});
$(".product-media-thumb").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
    infinite: true,
    dots: false,
    centerMode: false,
    arrows: false,
    asNavFor: ".product-media-full",
    responsive: [{ breakpoint: 767, settings: { slidesToShow: 4, slidesToScroll: 1, infinite: false, centerMode: false } }],
});
$(".qtybox .btnqty").on("click", function () {
    var a = parseInt($(this).parent(".qtybox").find(".quantity-input").val());
    if ($(this).hasClass("qtyplus")) {
        a++;
    } else {
        if (a > 1) {
            a--;
        }
    }
    a = isNaN(a) ? 1 : a;
    $(this).parent(".qtybox").find(".quantity-input").val(a);
});
$(document).ready(function () {
    $(".product_info_title").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".product_info_section").slideUp(200);
            $(".product_info_title i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
        } else {
            $(".product_info_title i").removeClass("fa-chevron-up").addClass("fa-chevron-down");
            $(this).find("i").removeClass("fa-chevron-down").addClass("fa-chevron-up");
            $(".product_info_title").removeClass("active");
            $(this).addClass("active");
            $(".product_info_section").slideUp(200);
            $(this).siblings(".product_info_section").slideDown(200);
        }
        $(".slick-slider").slick("setPosition");
    });
});
$(".image_slider_section").slick({
    centerMode: true,
    centerPadding: "30%",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="slick-prev-arrow"> </button>',
    nextArrow: '<button class="slick-next-arrow"> </button>',
    responsive: [
        { breakpoint: 991, settings: { arrows: true, centerMode: true, autoplay: true, centerPadding: "240px", slidesToShow: 1 } },
        { breakpoint: 767, settings: { arrows: false, dots: true, centerMode: false, autoplay: true, slidesToShow: 1 } },
    ],
});
$(window).on("resize orientationchange", function () {
    $(".slick-slider, .blends_step_slider, .mobile_third_slider, .mobile_single_slider, .recipes_mobile_slider").slick("resize");
});
$(".add_to_cart_product").click(function () {
    $(this).delay(800).hide(0);
    $(".go_to_checkout").delay(800).show(0);
});
$(document).ready(function () {
    if ($("#home_blends_video_3, #blends_video_3").length) {
        var a = $("#home_blends_video_3, #blends_video_3").get(0);
        a.addEventListener("ended", function () {
            v = a.currentSrc;
            a.src = "";
            a.src = v;
            a.pause();
        });
    }
});
$(".build_kit_column select").change(function () {
    var b = $(this).val();
    var d = $(this).closest(".build_kit_column");
    var c = "https://cdn.shopify.com/s/files/1/0267/9373/8343/files/Blend_blank.svg";
    var e = 0;
    var g = 0;
    $(".final_kit_id").remove();
    if (b) {
        var c = $(this).find(":selected").attr("data-image");
    }
    $(d).find("img").attr("src", c);
    $(".build_kit_column select").each(function (j, k) {
        if ($(this).val()) {
            var h = $(this).find(":selected").attr("data-price");
            e = e + parseFloat(h);
            $(".kit_form").append("<input class='final_kit_id' type='hidden' name='id[]' value='" + $(this).val() + "' />");
            g++;
        }
    });
    var a = e;
    if (g == 3) {
        var f = 5.9;
        e = e - f;
        $(".item__count").html(g);
        $(".final_kit_discount_price").html(f);
    }
    $(".final_kit_sub_price").html(a.toFixed(2));
    $(".final_kit_price").html(e.toFixed(2));
    $(".item__count").html(g);
});
 