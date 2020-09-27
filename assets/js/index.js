$('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{
        breakpoint: 450,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    }]
});

$('.buttonsss').first().addClass('active');

$('.buttonsss').click(function () {
    var $this = $(this);
    $siblings = $this.parent().children(),
        position = $siblings.index($this);
    console.log(position);

    $('.fills div').removeClass('active').eq(position).addClass('active');

    $siblings.removeClass('active');
    $this.addClass('active');
})

$('.btn-toggle-sidebar').click(function(){
    $('#list-menu-sidebar').toggleClass('show')
    $('.btn-show').toggleClass('show');
    $('.btn-hide').toggleClass('show')
})

$(document).ready(function () {
    $('.btn-toggle-collapse').click(function (e) {
        e.preventDefault();
        $('.collapse-menu').toggleClass('show')
    })
})

function buttonFunction(btn) {
    btn.style.backgroundColor = "#B1DAFF";
    btn.style.outline = "none";
}

