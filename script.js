$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function(){

  var cardIsotope = $('.card-container').isotope({
    itemSelector: '.card-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#CitySubMenu li').on( 'click', function() {
    console.log(`Clicked`);
    $("#CitySubMenu li").removeClass('filter-active');
    $(this).addClass('filter-active');

    cardIsotope.isotope({ filter: $(this).data('filter') });
  });

})

