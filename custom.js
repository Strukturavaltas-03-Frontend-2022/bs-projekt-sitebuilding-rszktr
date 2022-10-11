// Tooltip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})


// Scroll events
$(document).ready(function () {

    $('body').scrollspy({
        target: "#main-nav"
    });

    changeNavbar();

    $(window).scroll(function () {
        changeNavbar();
    });

    let width = $(window).width();
    $(window).on('resize', function () {
        if ($(this).width() !== width) {
            changeNavbar();
        }
    });

    function changeNavbar() {
        let navbar = $("#main-nav");
        if ($(this).scrollTop() >= 100 && $(window).width() >= 975) {
            whileDownSettings(navbar);
        } else if ($(this).scrollTop() < 100 && $(window).width() >= 975) {
            whileOnTopSettings(navbar)
        }
        else if ($(window).width() <= 975) {
            navBarBrandOnMobile(navbar)
        }
    }
}
);

let whileDownSettings = (item) => {
    item.addClass("bg-light").removeClass("bg-transparent");
    $('.navbar').css('transition', '0.3s ease');
    navBarBrandWhileDown()
    navLinkWhileDown();
}


let whileOnTopSettings = (item) => {
    item.removeClass("bg-light").addClass("bg-transparent");
    navBarBrandOnTop();
    navLinkOnTop();
}

let navBarBrandWhileDown = () => {
    $('.navbar-brand').css('color', 'rgba(50, 50, 50, 1)');
    $('.navbar-brand').mouseover(function () {
        $(this).css('color', '#fecc52');
    }).mouseout(function () {
        $(this).css('color', 'rgba(50, 50, 50, 1)');
    });
}

let navBarBrandOnTop = () => {
    $('.navbar-brand').css('color', '#fecc52');
    $('.navbar-brand').mouseover(function () {
        $(this).css('color', 'rgba(255,255,255,1)');
    }).mouseout(function () {
        $(this).css('color', '#fecc52');
    });
}

let navBarBrandOnMobile = (item) => {
    item.removeClass("bg-transparent");
    whileDownSettings(item)
    $('.navbar-brand').css('color', '#fecc52');
    $('.navbar-brand').mouseover(function () {
        $(this).css('color', '#fecc52');
    }).mouseout(function () {
        $(this).css('color', '#fecc52');
    });
}

let navLinkWhileDown = () => {
    $('.nav-link').css('color', 'rgba(50, 50, 50, 1)');
    $('.nav-link').mouseover(function () {
        $(this).css('color', '#fecc52');
    }).mouseout(function () {
        $(this).css('color', 'rgba(50, 50, 50, 1)');
    });
}

let navLinkOnTop = () => {
    $('.nav-link').css('color', 'rgba(220, 220, 220, 1)');
    $('.nav-link').mouseover(function () {
        $(this).css('color', 'rgba(255,255,255)');
    }).mouseout(function () {
        $(this).css('color', 'rgba(220, 220, 220, 1)');
    });
}


// Scroll setting
$(".nav-item a").click(function () {
    $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
    }, {
        duration: 300,
        easing: "swing"
    });
    return false;
});