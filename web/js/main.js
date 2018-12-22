/*SLICK-SLIDER FOR WORKS*/
$(document).ready(function() {
    $('.works-slider-box').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
    });
    $('.team-slider-box').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

});

// When the window has finished loading create our google map below
function initMap() {
    // The location of Uluru
    var markerImage =  "web/img/map-marker.png";
    var uluru = {lat: 48.918024, lng: 24.703827};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map-box'), {zoom: 16, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map, icon: markerImage});
}