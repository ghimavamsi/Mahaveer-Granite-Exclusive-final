/*--------------------- Copyright (c) 2019 -----------------------
[Master Javascript]
Project: Mahaveer Granite - Multipurpose Responsive HTML Template
Version: 1.0.0
Assigned to: Theme Forest
-------------------------------------------------------------------*/

(function ($) {
  "use strict";
  var Inland = {
    initialised: false,
    version: 1.0,
    mobile: false,
    init: function () {
      if (!this.initialised) {
        this.initialised = true;
      } else {
        return;
      }

      /*-------------- Mahaveer Granite Functions Calling ---------------------------------------------------
		------------------------------------------------------------------------------------------------*/

      this.Open_cartbox();
      this.list_radio();
      this.Search_bar_input();
      this.Login_popup();
      this.BannerSlider();
      this.Isotop_gallery();
      this.Magnific_popup();
      this.Team_slider();
      this.Video_popup();
      this.Progress_bar();
      this.Dark_testimonial();
      this.BannerSlider_style2();
      this.why_diffrent_style2();
      this.Team_slider_two();
      this.int_testimonial_slide2();
      this.Counter();
      this.Product_slider();
      this.index3_client_slider();
      this.index3_testimonial();
      this.index4_banner_slider();
      this.index4_testimonial_slider();
      this.Blog_post_img_slider();
      this.PriceRange();
      this.ListGridView();
      this.Product_thumb_slider();
      this.Quantity();
      this.Sign_slider();
      this.date_picker();
      this.niceselect();
      this.Mouse_wheel();
    },

    /*-------------- Mahaveer Granite Functions Calling ---------------------------------------------------
		---------------------------------------------------------------------------------------------------*/

    // start cartbox open toggle
    list_radio: function () {
      $(".int_credit_dark").on("click", function () {
        $(".active2").removeClass("active2");
        $(this).addClass("active2").find("input").prop("checked", true);
      });
      $(".int_credit_white").on("click", function () {
        $(".active").removeClass("active");
        $(this).addClass("active").find("input").prop("checked", true);
      });
    },

    Open_cartbox: function () {
      $(".box_add").on("click", function (e) {
        e.stopPropagation();
        $("body").toggleClass("open_cart");
      });
      $("body").on("click", function () {
        $("body").removeClass("open_cart");
      });
      $(".header_cartbox").on("click", function (event) {
        event.stopPropagation();
      });
      $(".int_toggle").on("click", function () {
        $(".int_menu").toggleClass("int_menu_open");
      });
      $(".int_home_dropdown").on("click", function () {
        $(this).toggleClass("int_hr_menu");
      });
      $(".close_menu_int").on("click", function () {
        $(".int_menu.int_menu_open").removeClass("int_menu_open");
      });
    },

    // End cartbox open toggle

    // Search bar box js
    Search_bar_input: function () {
      $(".open_search_bar").on("click", function () {
        $("body").addClass("close_search_bar");
      });
      $(".fa-times").on("click", function () {
        $("body").removeClass("close_search_bar");
      });

      $(".setting_toggle").on("click", function () {
        $(".int_profile_open").toggleClass("int_profile_drop");
      });
    },
    // Search bar box js

    // Sign up Model js
    Login_popup: function () {
      $(".int_login_model").on("click", function () {
        $(".int_modal_login").addClass("open_login_model");
      });
      $(".close_login").on("click", function () {
        $(".int_modal_login").removeClass("open_login_model");
      });

      $(".int_signup_model").on("click", function () {
        $(".int_modal_signup").addClass("open_signup_model");
      });
      $(".close_login").on("click", function () {
        $(".int_modal_signup").removeClass("open_signup_model");
      });
    },

    // start swippper slider
    BannerSlider: function () {
      var swiper = new Swiper(".banner_box_wrapper .swiper-container", {
        speed: 1000,
        loop: true,
        autoplay: false,
        slidesPerView: 1,
        navigation: {
          nextEl: ".banner_box_wrapper .swiper-button-next",
          prevEl: ".banner_box_wrapper .swiper-button-prev",
        },
      });
    },
    // End Swipper Slider

    // Star isotop gallery js

    Isotop_gallery: function () {
      $(window).on("load", function () {
        $(".gallery_grid").isotope({
          itemSelector: ".grid-item",
          filter: "*",
        });
        $(".int_project_gallery > .gallery_nav > ul > li").on(
          "click",
          "a",
          function () {
            // filter button click
            var filterValue = $(this).attr("data-filter");
            $(".gallery_grid").isotope({ filter: filterValue });

            //active class added
            $("a").removeClass("gallery_active");
            $(this).addClass("gallery_active");
          },
        );
      });

      $("#loadMore").on("click", function () {
        $(".int_view_gallery").addClass("int_view_gallery_view");
        $(".gallery_grid").isotope({
          itemSelector: ".grid-item",
          filter: "*",
        });
      });
    },

    // Star isotop gallery js

    // magnifiv popup for project gallery
    Magnific_popup: function () {
      if ($(".view").length > 0) {
        $(".view").magnificPopup({
          type: "image",

          gallery: {
            // options for gallery
            enabled: true,
          },

          // other options
        });
      }
    },
    // magnifiv popup for project gallery

    //team slider start
    Team_slider: function () {
      if ($(".team_box_wrapper .swiper-container").length > 0) {
        var swiper = new Swiper(".team_box_wrapper .swiper-container", {
          slidesPerView: 4,
          spaceBetween: 30,
          freeMode: true,
          speed: 1000,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            700: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          },
        });
      }
    },
    //team slider start

    //video Pop up start
    Video_popup: function () {
      if ($(".int_progresbar_wrapper .video_popup").length > 0) {
        $(".int_progresbar_wrapper .video_popup").magnificPopup({
          type: "iframe",
          iframe: {
            markup:
              '<div class="mfp-iframe-scaler">' +
              '<div class="mfp-close"></div>' +
              '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
              '<div class="mfp-title">Some caption</div>' +
              "</div>",
            patterns: {
              youtube: {
                index: "youtube.com/",
                id: "v=",
                src: "https://www.youtube.com/embed/BGRif5ClL9o",
              },
            },
          },
          // other options
        });
      }
    },
    //video Pop up End

    /*------------------------------------------------------------------*/

    //Progress bar start
    Progress_bar: function () {
      if ($(".int_progresbar_wrapper .progress_bar").length > 0) {
        $(document).ready(function () {
          const time = 1500;

          function calculateTime(time, dataCount) {
            return time / dataCount;
          }

          $(".progress_bar").each(function (index) {
            let count = 0;
            let label = $(this).children(".label");
            let line = $(this).children(".line");

            let dataCount = parseInt(label.attr("data-count"));
            let lineCount = line.children();
            let runTime = calculateTime(time, dataCount);
            setInterval(function () {
              if (count < dataCount) {
                count++;
                label.text(count + "%");
                lineCount.css("width", count + "%");

                if (count < 30) {
                  lineCount.css("background", "var(--text-primary)");
                } else if (count < 70) {
                  lineCount.css("background", "var(--text-primary)");
                } else if (count === 100) {
                  lineCount.css("background", "var(--text-primary)");
                } else {
                  lineCount.css("background", "var(--text-primary)");
                }
              }
            }, runTime);
          });
        });
      }
    },

    //Progress bar End
    /*------------------------------------------------------------------*/

    /*------------------------------------------------------------------*/

    //Dark Testimonial
    Dark_testimonial: function () {
      var galleryThumbs = new Swiper(
        ".int_testimonial_wrapper .gallery-thumbs",
        {
          spaceBetween: 15,
          slidesPerView: 3,
          loop: true,
          speed: 800,
          centeredSlides: true,
          allowTouchMove: false,
          effect: "coverflow",
          coverflowEffect: {
            rotate: 0,
            stretch: 10,
            depth: 0,
            modifier: 1,
            slideShadows: false,
          },
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          },
        },
      );

      var galleryTop = new Swiper(".int_testimonial_wrapper .gallery-top", {
        spaceBetween: 10,
        loop: true,
        allowTouchMove: false,
        speed: 800,
        slidesPerView: 1,
        pagination: {
          el: ".int_testimonial_wrapper .swiper-pagination",
          clickable: true,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        thumbs: {
          swiper: galleryThumbs,
        },
      });
    },
    //Dark Testimonial

    // index2 slider banner start
    BannerSlider_style2: function () {
      if ($(".int_slider_banner_style2 .swiper-container").length > 0) {
        var swiper = new Swiper(".int_slider_banner_style2 .swiper-container", {
          speed: 1000,
          loop: true,
          slidesPerView: 1,
          navigation: {
            nextEl: ".int_slider_banner_style2 .swiper-button-next",
            prevEl: ".int_slider_banner_style2 .swiper-button-prev",
          },
        });
      }
    },

    // End index2 slider banner

    //why_diffrent_style2 start
    why_diffrent_style2: function () {
      if ($(".why_diffrent_style2").length > 0) {
        var swiper = new Swiper(".why_diffrent_style2 .swiper-container", {
          centeredSlides: true,
          speed: 1000,
          loop: true,
          slidesPerView: 1,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".why_diffrent_style2 .swiper-button-next",
            prevEl: ".why_diffrent_style2 .swiper-button-prev",
          },
        });
      }
    },
    //why_diffrent_style2 End

    //team2 slider start
    Team_slider_two: function () {
      if ($(".team2_box_two .swiper-container").length > 0) {
        var swiper = new Swiper(".team2_box_two .swiper-container", {
          slidesPerView: 3,
          spaceBetween: 30,
          freeMode: true,
          centeredSlides: true,
          speed: 1000,
          loop: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".team2_box_two .swiper-button-next",
            prevEl: ".team2_box_two .swiper-button-prev",
          },
          breakpoints: {
            1199: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            575: {
              slidesPerView: 3,
              spaceBetween: 1,
            },
            0: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
          },
        });
      }
    },
    //team2 slider end

    //Testimonial2 slider start
    int_testimonial_slide2: function () {
      if ($(".int_testimonial_slide2 .swiper-container").length > 0) {
        var swiper = new Swiper(".int_testimonial_slide2 .swiper-container", {
          loop: true,
          speed: 2000,
          slidesPerView: 1,
          navigation: {
            nextEl: ".int_testimonial_slide2 .swiper-button-next",
            prevEl: ".int_testimonial_slide2 .swiper-button-prev",
          },
        });
      }
    },
    //Testimonial2 slider end

    //Counter Js start
    Counter: function () {
      if ($(".counter_text").length > 0) {
        $(".counter_text").appear(function () {
          $(".count_no").countTo();
        });
      }
    },
    //Counter Js end

    //Product Slider Js start
    Product_slider: function () {
      if ($(".int_product_slider_box").length > 0) {
        var swiper = new Swiper(".int_product_slider_box .swiper-container", {
          slidesPerView: 4,
          spaceBetween: 30,
          loop: true,
          speed: 2000,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".int_product_slider_box .swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            1199: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            991: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            575: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          },
        });
      }
    },
    //Product Slider Js end

    //Product Slider Js start
    index3_client_slider: function () {
      if ($(".int_client_slider").length > 0) {
        var swiper = new Swiper(".int_client_slider .swiper-container", {
          slidesPerView: 6,
          spaceBetween: 50,
          loop: true,
          breakpoints: {
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          },
        });
      }
    },
    //Product Slider Js end

    //Index 3 Testimonial
    index3_testimonial: function () {
      if ($(".int_testimonial_style3").length > 0) {
        var galleryThumbs = new Swiper(
          ".int_testimonial_style3 .gallery-thumbs",
          {
            spaceBetween: 50,
            slidesPerView: 3,
            loop: true,
            speed: 800,
            centeredSlides: true,
            allowTouchMove: false,
            effect: "coverflow",
            coverflowEffect: {
              rotate: 0,
              stretch: 10,
              depth: 0,
              modifier: 1,
              slideShadows: false,
            },
            breakpoints: {
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              767: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
            },
          },
        );

        var galleryTop = new Swiper(".int_testimonial_style3 .gallery-top", {
          spaceBetween: 10,
          loop: true,
          allowTouchMove: false,
          speed: 1000,
          slidesPerView: 1,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          thumbs: {
            swiper: galleryThumbs,
          },
        });
      }
    },
    //Index 3 Testimonial

    //Index 4 Banner Slider
    index4_banner_slider: function () {
      var swiper = new Swiper(".int_index4_slider_style4 .swiper-container", {
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        autoplay: true,
        effect: "fade",
        fadeEffect: { crossFade: true },
        pagination: {
          el: ".int_index4_slider_style4 .swiper-pagination",
          clickable: true,
        },
      });
    },
    //Index 3 Banner Slider

    // Index4 Testimonial Slider
    index4_testimonial_slider: function () {
      if ($(".int_testimonial_style4").length > 0) {
        var swiper = new Swiper(".int_testimonial_style4 .swiper-container", {
          loop: true,
          speed: 1000,
          effect: "fade",
          slidesPerView: 1,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          pagination: {
            el: ".int_testimonial_style4 .swiper-pagination",
            clickable: true,
          },
        });
      }
    },
    // Index4 Testimonial Slider

    // Blog Post Image Slider start
    Blog_post_img_slider: function () {
      if ($(".int_blog_post_slider").length > 0) {
        var swiper = new Swiper(".int_blog_post_slider .swiper-container", {
          centeredSlides: true,
          speed: 1000,
          loop: true,
          slidesPerView: 1,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".int_blog_post_slider .swiper-button-next",
            prevEl: ".int_blog_post_slider .swiper-button-prev",
          },
        });
      }
    },
    // Blog Post Image Slider End

    // Range Slider start
    PriceRange: function () {
      if ($(".range_slider").length > 0) {
        $(function () {
          $("#slider-range").slider({
            range: true,
            min: 12,
            max: 2000,
            values: [541, 1402],
            slide: function (event, ui) {
              $("#amount").text("₹" + ui.values[0] + " - ₹" + ui.values[1]);
            },
          });
          $("#amount").text(
            "₹" +
              $("#slider-range").slider("values", 0) +
              " - ₹" +
              $("#slider-range").slider("values", 1),
          );
        });
      }
    },
    // Range Slider End

    // List Grid View js start
    ListGridView: function () {
      $(".list_view_toggle > li > a").on("click", function () {
        $(".list_view_toggle > li > a").removeClass("active");
        $(this).addClass("active");
      });
      $(".list_view").on("click", function () {
        $(".int_product_listbar").addClass("product_list_view");
      });
      $(".grid_view").on("click", function () {
        $(".int_product_listbar").removeClass("product_list_view");
      });
    },
    // List Grid View js End

    // List Grid View js start
    Product_thumb_slider: function () {
      if ($(".int_thumb_slider").length > 0) {
        var galleryThumbs = new Swiper(".gallery-thumbs", {
          spaceBetween: 10,
          slidesPerView: 4,
          freeMode: true,
          watchSlidesVisibility: true,
          watchSlidesProgress: true,
        });
        var galleryTop = new Swiper(".gallery-top", {
          spaceBetween: 10,
          thumbs: {
            swiper: galleryThumbs,
          },
        });
      }
    },
    // List Grid View js End

    // Quantity js start
    Quantity: function () {
      var quantity = 0;
      $(".quantity_plus").on("click", function (e) {
        e.preventDefault();
        var quantity = parseInt($(this).siblings(".quantity").val());
        $(this)
          .siblings(".quantity")
          .val(quantity + 1);
      });
      $(".quantity_minus").on("click", function (e) {
        e.preventDefault();
        var quantity = parseInt($(this).siblings(".quantity").val());
        if (quantity > 0) {
          $(this)
            .siblings(".quantity")
            .val(quantity - 1);
        }
      });
    },
    // Quantity js End

    // radio btn active js start
    Sign_slider: function () {
      var swiper = new Swiper(".int_sign_slide .swiper-container", {
        slidesPerView: 1,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".int_sign_slide .swiper-button-next",
          prevEl: ".int_sign_slide .swiper-button-prev",
        },
      });
    },
    // radio btn active js End

    // datepicker js
    date_picker: function () {
      $(document).ready(function () {
        $("#datepicker").datepicker({ format: "yyyy/mm/dd" });
      });
    },
    // datepicker js

    /*Nice Select*/
    niceselect: function () {
      if ($("select").length > 0) {
        $("select").niceSelect();
      }
    },
    /*Nice Select*/

    /*Mouse_wheel*/
    Mouse_wheel: function () {
      if ($(window).width() >= 1699) {
        var swiper = new Swiper(".mouse_wheel_slide .swiper-container", {
          slidesPerView: 1,
          mousewheel: true,
          direction: "vertical",
          parallax: true,
          speed: 1500,
          autoHeight: true,
          pagination: {
            el: ".mouse_wheel_slide .swiper-pagination",
            clickable: true,
          },
        });
      }
      $(window)
        .resize(function () {
          var width = $(window).width();
          if (width < 1699) {
            $(".int_vertical_slider").removeClass("swiper-slide");
          }
        })
        .resize();
      $(window)
        .resize(function () {
          var width = $(window).width();
          if (width < 1699) {
            $(".int_vertical_slider").removeClass("swiper-container");
          }
        })
        .resize();
      $(window)
        .resize(function () {
          var width = $(window).width();
          if (width < 1699) {
            $(".int_vertical_slider").removeClass("swiper-wrapper");
          }
        })
        .resize();
    },
    /*Mouse_wheel*/
  };
  Inland.init();
})(jQuery);

// Contact Form Submission
function checkRequire(formId, targetResp) {
  targetResp.html("");
  var email =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  var url =
    /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
  var image = /\.(jpe?g|gif|png|PNG|JPE?G)$/;
  var mobile = /^[\s()+-]*([0-9][\s()+-]*){6,20}$/;
  var facebook = /^(https?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/;
  var twitter = /^(https?:\/\/)?(www\.)?twitter.com\/[a-zA-Z0-9(\.\?)?]/;
  var google_plus =
    /^(https?:\/\/)?(www\.)?plus.google.com\/[a-zA-Z0-9(\.\?)?]/;
  var check = 0;
  $("#er_msg").remove();
  var target = typeof formId == "object" ? $(formId) : $("#" + formId);
  target.find("input , textarea , select").each(function () {
    if ($(this).hasClass("require")) {
      if ($(this).val().trim() == "") {
        check = 1;
        $(this).focus();
        $(this).parent("div").addClass("form_error");
        targetResp.html("You missed out some fields.");
        $(this).addClass("error");
        return false;
      } else {
        $(this).removeClass("error");
        $(this).parent("div").removeClass("form_error");
      }
    }
    if ($(this).val().trim() != "") {
      var valid = $(this).attr("data-valid");
      if (typeof valid != "undefined") {
        if (!eval(valid).test($(this).val().trim())) {
          $(this).addClass("error");
          $(this).focus();
          check = 1;
          targetResp.html($(this).attr("data-error"));
          return false;
        } else {
          $(this).removeClass("error");
        }
      }
    }
  });
  return check;
}
$(".submitForm").on("click", function () {
  var _this = $(this);
  var targetForm = _this.closest("form");
  var errroTarget = targetForm.find(".response");
  var check = checkRequire(targetForm, errroTarget);

  if (check == 0) {
    var formDetail = new FormData(targetForm[0]);
    formDetail.append("form_type", _this.attr("form-type"));
    $.ajax({
      method: "post",
      url: "ajaxmail.php",
      data: formDetail,
      cache: false,
      contentType: false,
      processData: false,
    }).done(function (resp) {
      console.log(resp);
      if (resp == 1) {
        targetForm.find("input").val("");
        targetForm.find("textarea").val("");
        errroTarget.html(
          '<p style="color:green;">Mail has been sent successfully.</p>',
        );
      } else {
        errroTarget.html(
          '<p style="color:red;">Something went wrong please try again latter.</p>',
        );
      }
    });
  }
});

jQuery(document).ready(function () {
  // accordion toggle
  jQuery(document).on("click", ".filter-toggle", function () {
    const box = jQuery(this).closest(".int_sidebar_box");
    const icon = jQuery(this).find(".acc-icon");

    box.toggleClass("active");

    if (box.hasClass("active")) {
      icon.text("−");
    } else {
      icon.text("+");
    }
  });

  // clear all
  jQuery(".filter-clear").on("click", function () {
    jQuery('input[type="checkbox"], input[type="radio"]').prop(
      "checked",
      false,
    );
    jQuery(".color-dot").removeClass("active");
    jQuery(".int_sidebar_box").removeClass("active");
    jQuery(".acc-icon").text("+");
  });
});

// color select (acts like radio)
jQuery(document).on("click", ".color-dot", function () {
  jQuery(this).siblings(".color-dot").removeClass("active");
  jQuery(this).addClass("active");
});

jQuery(".filter-clear").on("click", function () {
  jQuery('input[type="checkbox"], input[type="radio"]').prop("checked", false);
  jQuery(".color-dot").removeClass("active");
  jQuery(".int_sidebar_box").removeClass("active");
});

// ================= PRODUCT DETAILS PAGE JS =================
document.addEventListener("DOMContentLoaded", function () {
  /* ================================
     MAIN IMAGE ZOOM (DESKTOP)
  =================================== */
  const zoomContainer = document.querySelector(".image-zoom-container");
  const mainImg = document.getElementById("mainImage");

  if (zoomContainer && mainImg) {
    zoomContainer.addEventListener("mousemove", (e) => {
      const rect = zoomContainer.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      mainImg.style.transformOrigin = `${x}% ${y}%`;
    });

    zoomContainer.addEventListener("mouseleave", () => {
      mainImg.style.transformOrigin = "center";
    });
  }

  /* ================================
     RESPONSIVE INFINITE THUMB SLIDER
     (NO AUTO SLIDE)
  =================================== */

  const track = document.querySelector(".thumb-track");
  const prevBtn = document.querySelector(".thumb-nav.prev");
  const nextBtn = document.querySelector(".thumb-nav.next");

  if (track) {
    let thumbs = Array.from(track.children);
    let originalCount = thumbs.length;
    let visible = getVisibleCount();
    let index = visible;

    function getVisibleCount() {
      if (window.innerWidth <= 576) return 3;
      if (window.innerWidth <= 768) return 4;
      return 4;
    }

    function getThumbWidth() {
      const thumb = track.querySelector(".thumb");
      if (!thumb) return 0;
      const gap = 10; // match CSS gap
      return thumb.offsetWidth + gap;
    }

    function cloneSlides() {
      thumbs = Array.from(track.children);
      originalCount = thumbs.length;

      for (let i = 0; i < visible; i++) {
        track.appendChild(thumbs[i].cloneNode(true));
        track.insertBefore(
          thumbs[originalCount - 1 - i].cloneNode(true),
          track.firstChild,
        );
      }

      thumbs = Array.from(track.children);
      index = visible;
      track.style.transform = `translateX(-${index * getThumbWidth()}px)`;
    }

    function moveSlider() {
      track.style.transition = "transform 0.4s ease";
      track.style.transform = `translateX(-${index * getThumbWidth()}px)`;
    }

    function nextSlide() {
      index++;
      moveSlider();

      if (index === originalCount + visible) {
        setTimeout(() => {
          track.style.transition = "none";
          index = visible;
          track.style.transform = `translateX(-${index * getThumbWidth()}px)`;
        }, 400);
      }
    }

    function prevSlide() {
      index--;
      moveSlider();

      if (index === visible - 1) {
        setTimeout(() => {
          track.style.transition = "none";
          index = originalCount + visible - 1;
          track.style.transform = `translateX(-${index * getThumbWidth()}px)`;
        }, 400);
      }
    }

    cloneSlides();

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    /* Resize recalculation */
    window.addEventListener("resize", () => {
      track.style.transition = "none";
      visible = getVisibleCount();
      index = visible;
      track.style.transform = `translateX(-${index * getThumbWidth()}px)`;
    });

    /* Thumbnail Click Sync */
    track.addEventListener("click", (e) => {
      const thumb = e.target.closest(".thumb");
      if (!thumb || !thumb.dataset.img) return;

      document.querySelector(".thumb.active")?.classList.remove("active");
      thumb.classList.add("active");
      changeMainImage(thumb.dataset.img);
    });
  }

  /* ================================
     ACCORDION
  =================================== */

  document.querySelectorAll(".acc-header").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.parentElement;
      const icon = btn.querySelector(".icon");

      item.classList.toggle("active");

      if (icon) {
        icon.textContent = item.classList.contains("active") ? "−" : "+";
      }
    });
  });

  /* ================================
     IMAGE SWITCH
  =================================== */

  function changeMainImage(src) {
    if (!mainImg) return;
    mainImg.style.opacity = "0";
    setTimeout(() => {
      mainImg.src = src;
      mainImg.style.opacity = "1";
    }, 150);
  }

  /* ================================
     MOBILE FULL SCREEN ZOOM
  =================================== */

  const zoomModal = document.getElementById("zoomModal");
  const zoomModalImg = document.getElementById("zoomModalImg");
  const zoomClose = document.querySelector(".zoom-close");

  if (mainImg) {
    mainImg.addEventListener("click", () => {
      if (window.innerWidth <= 768 && zoomModal) {
        zoomModalImg.src = mainImg.src;
        zoomModal.classList.add("active");
      }
    });
  }

  if (zoomClose) {
    zoomClose.addEventListener("click", () => {
      zoomModal.classList.remove("active");
    });
  }

  if (zoomModal) {
    zoomModal.addEventListener("click", (e) => {
      if (e.target === zoomModal) {
        zoomModal.classList.remove("active");
      }
    });
  }
});

// ===== ENQUERY MODAL POPUP======
jQuery(document).ready(function () {
  const modal = jQuery("#mgEnquiryModal");
  const overlay = jQuery("#mgEnquiryOverlay");

  jQuery("#mgOpenEnquiry").on("click", function () {
    modal.addClass("active");
    overlay.addClass("active");
    jQuery("body").css("overflow", "hidden");
  });

  function closeModal() {
    modal.removeClass("active");
    overlay.removeClass("active");
    jQuery("body").css("overflow", "auto");
  }

  jQuery("#mgCloseEnquiry, #mgCancelEnquiry, #mgEnquiryOverlay").on(
    "click",
    function () {
      closeModal();
    },
  );

  // optional: close on ESC
  jQuery(document).on("keydown", function (e) {
    if (e.key === "Escape") {
      closeModal();
    }
  });
});

// =======MOBILE SIDEBAR FILTER==========
const filterBtn = document.querySelector(".mobile-filter-btn");
const drawer = document.getElementById("mobileFilterDrawer");
const overlay = document.getElementById("filterOverlay");
const closeBtn = document.getElementById("filterClose");
const cancelBtn = document.getElementById("filterCancel");

if (filterBtn) {
  filterBtn.addEventListener("click", () => {
    drawer.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("filter-open");
  });
}

function closeFilter() {
  drawer.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("filter-open");
}

if (closeBtn) closeBtn.addEventListener("click", closeFilter);
if (cancelBtn) cancelBtn.addEventListener("click", closeFilter);
if (overlay) overlay.addEventListener("click", closeFilter);
