'use strict';

/**
 * Create a marker with info on a Google map.
 * @param lat (E.g. 62.0751)
 * @param long (E.g. 9.1272)
 * @param title (Name of the Boogie Woogie Dance Camp)
 * @param link (Link to the website of the Boogie Woogie Dance Camp)
 * @param map (The initialized Google map)
 */

function createMarkerWithInfo(lat, long, title, link, map) {
    var marker = new google.maps.Marker({
        position: {lat: lat, lng: long},
        map: map
    });

    var content =
        '<h2>' + title + '</h2>'+
        '<a href="' + link + '">'+
        '' + link + '</a>';


    var infoWindow = new google.maps.InfoWindow({
        content: content
    });
    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

}

/**
 * Generate Boogie Woogie Dance Camps markers for the whole World.
 * @param map (The initialized Google map)
 */

function generateMarkersForWorldMap(map) {

    // Norway:
    createMarkerWithInfo(62.0751, 9.1272, 'Boogie Feet\'s Festival', 'http://www.boogiefeets.com/', map);
    createMarkerWithInfo(60.3913, 5.3221, 'Swing Brother, Swing!', 'http://swingbrotherswing.no/', map);

    // Poland:
    createMarkerWithInfo(53.6671796, 17.359013, 'Polish Boogie Festival', 'http://www.polishboogie.com/en/', map);

    // Russia:
    createMarkerWithInfo(55.7558, 37.6173, 'Moscow Christmas Swing Dance Camp', 'http://mxdc.ru/en/', map);

    // Sweden:
    createMarkerWithInfo(60.128201, 18.648209, 'Herräng Dance Camp Week 1', 'https://www.herrang.com/program/week-1', map);
    createMarkerWithInfo(59.8552777778, 17.6319444444, 'Uppsala Boogie Woogie Weekend', 'http://swingkatten.se/lagerochevenemang', map);

}

/**
 * Initialize Google map for the whole World.
 */

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        center: {lat: 57.708870, lng: 11.974560},
        styles: [
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }
        ]
    });

    generateMarkersForWorldMap(map);
}

initMap();
