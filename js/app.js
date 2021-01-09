console.log('loaded');

var hotels = [{
    'name':'Ritz Carlton',
    'locations': ['Los Angeles', 'Las Vegas', 'New York']
}, {
    'name':'St. Regis',
    'locations': ['Los Angeles', 'Chicago', 'New Orleans']
}, {
    'name':'Edition',
    'locations': ['Orlando', 'Tampa', 'Miami']
},{
    'name':'The Luxory Collection',
    'locations': ['Long Beach', 'San Francisco', 'New York']
},{
    'name':'W Hotels',
    'locations': ['Palm Beach', 'Las Vegas', 'Chicago']
}];

var miResorts = new Vue({
    el: '#mi_resorts',
    data: {
        hotels: hotels
    },
    methods: {
        openLink(searchTerm) {
            var url = "https://bluip.com?s=" + searchTerm;
            
        }
    }
});

// $(document).ready(function(){
//     $(window).bind('scroll', function() {
//         var navHeight = $(window).height() - 60;
//         if ($(window).scrollTop() > navHeight) {
//             $('nav').addClass('fixed-menu');
//         }
//         else {
//             $('nav').removeClass('fixed-menu');
//         }
//     });
//  });
$(window).scroll(function(){
    if($(this).scrollTop() > 220){
        $('.menu-fixed').fadeIn();
    }else{
        $('.menu-fixed').fadeOut();
    }
});

 $(window).scroll(function(){
    if($(this).scrollTop() > 500){
        $('#backtotop').fadeIn();
    }else{
        $('#backtotop').fadeOut();
    }
});

$('#backtotop').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 0);
    return false;
});

$('#explore').click(function(){
    $(".explore-page").animate({ scrollTop: 0 }, 0);
    return false;
});