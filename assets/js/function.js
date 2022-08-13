function LeftArrow() {
    document.querySelector(".slider_1 .slick-prev").click()
};
function
    RightArrow() {
    document.querySelector(".slider_1 .slick-next").click()
};

function LeftArrow2() {
    document.querySelector(".slider_2 .slick-prev").click()
};
function
    RightArrow2() {
    document.querySelector(".slider_2 .slick-next").click()
};
function LeftArrow3() {
    document.querySelector(".slider_3 .slick-prev").click()
};
function
    RightArrow3() {
    document.querySelector(".slider_3 .slick-next").click()
};

function LeftArrow4() {
    document.querySelector(".slider_4 .slick-prev").click()
};
function
    RightArrow4() {
    document.querySelector(".slider_4 .slick-next").click()
};
function LeftArrow5() {
    document.querySelector(".slider_5 .slick-prev").click()
};
function
    RightArrow5() {
    document.querySelector(".slider_5 .slick-next").click()
};

function LeftArrow6() {
    document.querySelector(".slider_6 .slick-prev").click()
};
function
    RightArrow6() {
    document.querySelector(".slider_6 .slick-next").click()
};
function LeftArrow7() {
    document.querySelector(".slider_7 .slick-prev").click()
};
function
    RightArrow7() {
    document.querySelector(".slider_7 .slick-next").click()
};

function LeftArrow8() {
    document.querySelector(".slider_8 .slick-prev").click()
};
function
    RightArrow8() {
    document.querySelector(".slider_8 .slick-next").click()
};


function toggle_visibility(id) {
    var e = document.getElementById(id);
    var f = document.getElementById('plusvv');
    var f1 = document.getElementById('plusvv1');
    var f2 = document.getElementById('plusvv2');
    var f3 = document.getElementById('plusvv3');
    var f4 = document.getElementById('plusvv4');
    var f5 = document.getElementById('plusvv5');
    var f6 = document.getElementById('plusvv6');
    var j = document.getElementById('minusvv');
    var j1 = document.getElementById('minusvv1');
    var j2 = document.getElementById('minusvv2');
    var j3 = document.getElementById('minusvv3');
    var j4 = document.getElementById('minusvv4');
    var j5 = document.getElementById('minusvv5');
    var j6 = document.getElementById('minusvv6');
    // var i = document.querySelector(".main-p .fa-plus");
    if (e.style.display == 'block') {
        e.style.display = 'none';
        j.style.display = 'none';
        j1.style.display = 'none';
        j2.style.display = 'none';
        j3.style.display = 'none';
        j4.style.display = 'none';
        j5.style.display = 'none';
        f.style.display ='block';
        f1.style.display ='block';
        f2.style.display ='block';
        f3.style.display ='block';
        f4.style.display ='block';
        f5.style.display ='block';
    }  
    else {
        e.style.display = 'block';
        f.style.display ='none';
        f1.style.display ='none';
        f2.style.display ='none';
        f3.style.display ='none';
        f4.style.display ='none';
        f5.style.display ='none';
        j.style.display ='block';
        j1.style.display ='block';
        j2.style.display ='block';
        j3.style.display ='block';
        j4.style.display ='block';
        j5.style.display ='block';
    }
    // if (i.style.display == 'block') {
    //     i.style.display = 'none';
    // } else {
    //     i.style.display = 'block'
    // }
}
