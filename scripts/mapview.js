require(["esri/Map", "esri/views/MapView"], function (Map, MapView) {
    const map = new Map({
        basemap: "streets-navigation-vector" // you can change this basemap style
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-112.0341, 43.4917], // Longitude, latitude of Idaho Falls
        zoom: 12
    });
});