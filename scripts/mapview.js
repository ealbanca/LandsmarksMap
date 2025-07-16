let map;
let markers = [];  // global array to hold marker objects

const icons = {
    park: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    museum: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    historical: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
};

function initMap() {
    const idahoFalls = { lat: 43.4917, lng: -112.0341 };

    map = new google.maps.Map(document.getElementById("map"), {
        center: idahoFalls,
        zoom: 13.5,
    });

    fetch('markers.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(({ position, title, type, description, image, link }) => {
                // If missing type or title, assign default or skip
                const markerType = type || 'park';  // default to park or you can skip if no type
                const markerTitle = title || 'No Title';

                const marker = new google.maps.Marker({
                    position,
                    map,
                    title: markerTitle,
                    icon: icons[markerType],
                });

                marker.type = markerType;
                marker.description = description;
                marker.image = image;
                marker.link = link;

                marker.addListener("click", () => {
                    showMarkerDetails(marker);
                });

                markers.push(marker);
            });
        })
        .catch(error => console.error('Error loading marker data:', error));
}
