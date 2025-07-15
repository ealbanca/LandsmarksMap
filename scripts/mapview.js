function initMap() {
    const idahoFalls = { lat: 43.4917, lng: -112.0341 };

    const map = new google.maps.Map(document.getElementById("map"), {
        center: idahoFalls,
        zoom: 13,
    });

    const markers = [
        {
            position: { lat: 43.4936, lng: -112.0402 },
            title: "Idaho Falls Zoo at Tautphaus Park",
            type: "park",
        },
        {
            position: { lat: 43.4974, lng: -112.0341 },
            title: "Museum of Idaho",
            type: "museum",
        },
        {
            position: { lat: 43.4953, lng: -112.0328 },
            title: "Colonial Theater (Historic)",
            type: "historical",
        },
    ];

    const icons = {
        park: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
        museum: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        historical: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
    };

    markers.forEach(({ position, title, type }) => {
        new google.maps.Marker({
            position,
            map,
            title,
            icon: icons[type],
        });
    });
}