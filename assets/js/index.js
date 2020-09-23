$('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true
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