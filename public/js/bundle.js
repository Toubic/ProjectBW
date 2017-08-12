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

    // Canada:
    createMarkerWithInfo(45.50884, -73.58781, 'Dig Tha\' Feet', 'https://www.digthafeet.com/', map);

    // Finland:
    createMarkerWithInfo(60.6333333, 24.8666667, 'MidSummer Boogie Camp', 'http://www.swinghopping.com/events/with-boogie-woogie/in-finland/june-2017/', map);

    // France:
    createMarkerWithInfo(48.58392, 7.74553, 'Boogie Spirit Festival', 'https://www.facebook.com/boogiespiritfestival/', map);
    createMarkerWithInfo(48.864716, 2.349014, 'Paris Flying Festival', 'http://www.parisflyingfestival.com/', map);

    // Germany:
    createMarkerWithInfo(48.0508, 10.8704, 'BB-DanceCamp', 'http://www.boogie-baeren.de/bb-dancecamp-en.html', map);
    createMarkerWithInfo(51.3397, 12.3731, 'Firebirds Festival Dance Camp', 'https://www.firebirds-festival.de/?tpl=4&language=en', map);
    createMarkerWithInfo(48.1366, 11.5771, 'Rock That Swing Festival', 'http://www.rockthatswing.com', map);

    // Greece:
    createMarkerWithInfo(37.983810, 23.727539, 'Boogie Woogie Explosion', 'http://www.rollinfoxes.gr/content/boogie-woogie-explosion', map);

    // Italy:
    createMarkerWithInfo(40.20763, 16.67071, 'Policoro in Swing', 'http://www.policoroinswing.com/', map);
    createMarkerWithInfo(43.71626, 13.20882, 'Summer Jamboree', 'http://www.summerjamboree.com', map);

    // Netherlands:
    createMarkerWithInfo(52.370216, 4.895168, 'Jump Up The Boogie Train', 'http://www.jumpupboogiewoogie.nl/', map);

    // Norway:
    createMarkerWithInfo(62.0751, 9.1272, 'Boogie Feet\'s Festival', 'http://www.boogiefeets.com/', map);
    createMarkerWithInfo(60.3913, 5.3221, 'Swing Brother, Swing!', 'http://swingbrotherswing.no/', map);

    // Poland:
    createMarkerWithInfo(53.6671796, 17.359013, 'Polish Boogie Festival', 'http://www.polishboogie.com/en/', map);

    // Russia:
    createMarkerWithInfo(55.7558, 37.6173, 'Moscow Christmas Swing Dance Camp', 'http://mxdc.ru/en/', map);

    // South Korea:
    createMarkerWithInfo(37.532600, 127.024612, 'Rockin’ & Swingin’ Festival', 'http://rockinswingin.com/', map);

    // Spain:
    createMarkerWithInfo(41.390205, 2.154007, 'Rock it!', 'http://rockitbcn.com/', map);

    // Sweden:
    createMarkerWithInfo(60.128201, 18.648209, 'Herräng Dance Camp Week 1', 'https://www.herrang.com/program/week-1', map);
    createMarkerWithInfo(59.8552777778, 17.6319444444, 'Uppsala Boogie Woogie Weekend', 'http://swingkatten.se/lagerochevenemang', map);

    // Switzerland:
    createMarkerWithInfo(47.36667, 8.55, 'Swiss Boogie Weekend', 'http://boogieweekend.ch/', map);

    // Ukraine:
    createMarkerWithInfo(50.45466, 30.5238, 'October Boogie Fest', 'https://www.facebook.com/hotboogiedance', map);
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
