(function ($) {
  'use strict';

  /*==================================================================

      [ Daterangepicker ]*/

  try {
    $('.js-datepicker').daterangepicker({
      "singleDatePicker": true,
      "showDropdowns": true,
      "autoUpdateInput": false,
      locale: {
        format: 'DD/MM/YYYY'
      },
    });

    var myCalendar = $('.js-datepicker');
    var isClick = 0;

    $(window).on('click', function () {
      isClick = 0;
    });

    $(myCalendar).on('apply.daterangepicker', function (ev, picker) {
      isClick = 0;
      $(this).val(picker.startDate.format('DD/MM/YYYY'));
    });

    $('.js-btn-calendar').on('click', function (e) {
      e.stopPropagation();

      if (isClick === 1) isClick = 0;
      else if (isClick === 0) isClick = 1;

      if (isClick === 1) {
        myCalendar.focus();
      }
    });

    $(myCalendar).on('click', function (e) {
      e.stopPropagation();
      isClick = 1;
    });

    $('.daterangepicker').on('click', function (e) {
      e.stopPropagation();
    });
  } catch (er) {
    console.log(er);
  }

  /*[ Select 2 Config ]

      ===========================================================*/



  try {

    var selectSimple = $('.js-select-simple');
    selectSimple.each(function () {
      var that = $(this);
      var selectBox = that.find('select');
      var selectDropdown = that.find('.select-dropdown');
      selectBox.select2({
        dropdownParent: selectDropdown
      });
    });

  } catch (err) {
    console.log(err);
  }
})(jQuery);

//Submit
$('#bootstrapForm').submit(function (event) {
  event.preventDefault()
  var extraData = {}
  $('#bootstrapForm').ajaxSubmit({
    data: extraData,
    dataType: 'jsonp',
    error: function () {
      alert('Registration Done. You will be redirected to Home')
      window.location = 'http://titiksha.tech'
    }
  })
})

//Navbar
var menuBtn = document.querySelector(".menu-btn");
var nav = document.querySelector(".nav");
var menuShown = false;

menuBtn.addEventListener("click", function () {
  if (menuShown) {
    nav.style.opacity = 0;
    menuShown = false;
    setTimeout(function () {
      nav.style.display = "none";
      menuBtn.classList.remove("pushed");
      nav.classList.remove("active");
    }, 600);
  } else {
    nav.style.display = "flex";
    setTimeout(function () {
      menuBtn.classList.add("pushed");
      nav.style.opacity = 1;
      nav.classList.add("active");
    }, 10);
    menuShown = true;
  }
});

//Show-Hide
$(document).on('change', '.div-toggle', function () {
  var target = $(this).data('target');
  var show = $("option:selected", this).data('show');
  $(target).children().addClass('hide');
  $(show).removeClass('hide');
});
$(document).ready(function () {
  $('.div-toggle').trigger('change');
});
