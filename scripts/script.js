// JavaScript Document

let bg_count = 0;
setInterval(splashManipulator, 5000);

function splashManipulator() {
    const x = document.getElementById("home");
    const heroImages = ["url(images/hero_bg-2.jpg)", "url(images/hero_bg-3.jpg)"];

    x.style.backgroundImage = heroImages[bg_count];
    bg_count++;
    if (bg_count > heroImages.length) {
        bg_count = 0;
    }
}


function showMenu(ham) {

    ham.classList.toggle("changeHam");
    var x = document.getElementById("sideNav");
    if (x.style.width !== '80px') {
        x.style.width = '80px'
    } else {
        x.style.width = '0px'
    }

}

let tips = document.getElementsByClassName('tip');

function showTip(index) {
    document.getElementById("tip" + index).style.display = "block";
}

function hideTip(index) {
    document.getElementById("tip" + index).style.display = "none";
}

function openTab(evt, tabName) {
    let i, x, tablinks;
    x = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++){
        console.log(tablinks.length);
        tablinks[i].className = tablinks[i].className.replace("active_tab", "normal_tab");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active_tab";
}


/*scrolling mouse script**/
jQuery(document).ready(function ($) {

    $('a.scroll-link').click(function (e) {
        e.preventDefault();
        $id = $(this).attr('href');
        $('body,html').animate({
            scrollTop: $($id).offset().top - 0
        }, 750);
    });

});

/*scrolling from bottom to top script**/
jQuery(document).ready(function ($) {

    $('a.scroll-down').click(function (e) {
        e.preventDefault();
        $id = $(this).attr('href');
        $('body,html').animate({
            scrollTop: $($id).offset().top - 0
        }, 750);
    });

});


function showImage(img) {
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
}
