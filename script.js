$(document).ready(function () {
    $('.sliderMain__top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });
});

$('.slider_brand').slick({
    dots: true,
    centerMode: true,
    centerPadding: '50px',
    slidesToScroll: 2,
    slidesToShow: 6,
    draggable: true,
    // arrows: false,
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});





// tạo sidebar 

function w3_open1() {
    document.getElementById("w3-btn1").style.display = "none";
    document.getElementById("mySidebar1").style.display = "block";
}
function w3_open2() {
    document.getElementById("w3-btn2").style.display = "none";
    document.getElementById("mySidebar2").style.display = "block";
}
function w3_open3() {
    document.getElementById("w3-btn3").style.display = "none";
    document.getElementById("mySidebar3").style.display = "block";
}
function w3_open4() {
    document.getElementById("w3-btn4").style.display = "none";
    document.getElementById("mySidebar4").style.display = "block";
}
function w3_open5() {
    document.getElementById("w3-btn5").style.display = "none";
    document.getElementById("mySidebar5").style.display = "block";
}



function w3_close1() {
    document.getElementById("w3-btn1").style.display = "block";
    document.getElementById("mySidebar1").style.display = "none";
}
function w3_close2() {
    document.getElementById("w3-btn2").style.display = "block";
    document.getElementById("mySidebar2").style.display = "none";
}
function w3_close3() {
    document.getElementById("w3-btn3").style.display = "block";
    document.getElementById("mySidebar3").style.display = "none";
}
function w3_close4() {
    document.getElementById("w3-btn4").style.display = "block";
    document.getElementById("mySidebar4").style.display = "none";
}
function w3_close5() {
    document.getElementById("w3-btn5").style.display = "block";
    document.getElementById("mySidebar5").style.display = "none";

}
// Khi bật thanh sidebar. Hoạt động trong một khoảng nhất định giữa các phần tử.
            // + ở đây mỗi phần tử được tăng bằng một nữa kích thước trang (phần tử hiển thị)
            // + kích tăng mỗi lần 370px 

var myObject1 = document.getElementById('menu-product1');
var close1 = document.getElementById('mySidebar1');
var open1 = document.getElementById('w3-btn1');
window.addEventListener('scroll', function () {
    if (window.scrollY >= 730 && window.scrollY<=1100) { // Khi vị trí cuộn của trang lớn hơn hoặc bằng 500px
        myObject1.style.display = 'block'; // Hiển thị đối tượng
    } else {
        myObject1.style.display = 'none'; // Ẩn đối tượng
        close1.style.display = 'none';
        open1.style.display = 'block';
    }
});
var myObject2 = document.getElementById('menu-product2');
var close2 = document.getElementById('mySidebar2');
var open2 = document.getElementById('w3-btn2');
window.addEventListener('scroll', function () {
    if (window.scrollY >= 1600 && window.scrollY <= 1970) { // Khi vị trí cuộn của trang lớn hơn hoặc bằng 500px
        myObject2.style.display = 'block'; // Hiển thị đối tượng
    } else {
        myObject2.style.display = 'none'; // Ẩn đối tượng
        close2.style.display = 'none';
        open2.style.display = 'block';
    }
});
var myObject3 = document.getElementById('menu-product3');
var close3 = document.getElementById('mySidebar3');
var open3 = document.getElementById('w3-btn3');
window.addEventListener('scroll', function () {
    if (window.scrollY >= 2410 && window.scrollY <= 2780) { // Khi vị trí cuộn của trang lớn hơn hoặc bằng 500px
        myObject3.style.display = 'block'; // Hiển thị đối tượng
    } else {
        myObject3.style.display = 'none'; // Ẩn đối tượng
        close3.style.display = 'none';
        open3.style.display = 'block';
    }
});
var myObject4 = document.getElementById('menu-product4');
var close4 = document.getElementById('mySidebar4');
var open4 = document.getElementById('w3-btn4');
window.addEventListener('scroll', function () {
    if (window.scrollY >= 3200 && window.scrollY <= 3570) { // Khi vị trí cuộn của trang lớn hơn hoặc bằng 500px
        myObject4.style.display = 'block'; // Hiển thị đối tượng
    } else {
        myObject4.style.display = 'none'; // Ẩn đối tượng
        close4.style.display = 'none';
        open4.style.display = 'block';
    }
});
var myObject5 = document.getElementById('menu-product5');
var close5 = document.getElementById('mySidebar5');
var open5 = document.getElementById('w3-btn5');
window.addEventListener('scroll', function () {
    if (window.scrollY >= 3990 && window.scrollY <= 4360) { // Khi vị trí cuộn của trang lớn hơn hoặc bằng 500px
        myObject5.style.display = 'block'; // Hiển thị đối tượng
    } else {
        myObject5.style.display = 'none'; // Ẩn đối tượng
        close5.style.display = 'none';
        open5.style.display = 'block';
    }
});



