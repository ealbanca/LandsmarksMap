function initMap() {
    const idahoFalls = { lat: 43.4917, lng: -112.0341 };

    const map = new google.maps.Map(document.getElementById("map"), {
        center: idahoFalls,
        zoom: 13,
    });

    fetch('markers.json')
        .then(response => response.json())
        .then(markers => {
            markers.forEach(({ position, title, type }) => {
                new google.maps.Marker({
                    position,
                    map,
                    title,
                    icon: icons[type],
                });
            });
        })
        .catch(error => console.error('Error loading marker data:', error));
}

const icons = {
    park: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    museum: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    historical: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
};