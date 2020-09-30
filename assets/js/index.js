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

var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31],
    today = new Date(),
    // default targetDate is christmas
    targetDate = new Date(today.getFullYear(), 11, 25); 

setDate(targetDate);
setYears(5) // set the next five years in dropdown

$("#select-month").change(function() {
  var monthIndex = $("#select-month").val();
  setDays(monthIndex);
});

function setDate(date) {
  setDays(date.getMonth());
  $("#select-day").val(date.getDate());
  $("#select-month").val(date.getMonth());
  $("#select-year").val(date.getFullYear()); 
}

// make sure the number of days correspond with the selected month
function setDays(monthIndex) {
  var optionCount = $('#select-day option').length,
      daysCount = daysInMonth[monthIndex];
  
  if (optionCount < daysCount) {
    for (var i = optionCount; i < daysCount; i++) {
      $('#select-day')
        .append($("<option></option>")
        .attr("value", i + 1)
        .text(i + 1)); 
    }
  }
  else {
    for (var i = daysCount; i < optionCount; i++) {
      var optionItem = '#select-day option[value=' + (i+1) + ']';
      $(optionItem).remove();
    } 
  } 
}

function setYears(val) {
  var year = today.getFullYear();
  for (var i = 0; i < val; i++) {
      $('#select-year')
        .append($("<option></option>")
        .attr("value", year + i)
        .text(year + i)); 
    }
}
