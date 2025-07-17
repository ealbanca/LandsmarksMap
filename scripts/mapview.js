// Variables for the map, markers and icons
let map;
let markers = [];  // global array to hold marker objects

const icons = {
    park: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    museum: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
    historical: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
};

// Function to initialize the map using google map API
function initMap() {
    const idahoFalls = { lat: 43.4917, lng: -112.0341 };

    //Create the map and add desired zoom for the map
    map = new google.maps.Map(document.getElementById("map"), {
        center: idahoFalls,
        zoom: 13.5,
    });

    //Fetch markers info from markers.json file
    fetch('markers.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(({ position, title, type, description, image, link }) => {
                // If missing type or title, assign default
                const markerType = type || 'park';
                const markerTitle = title || 'No Title';

                //Create marker with its elements
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

                //Added click listener to marker, so It displays the info
                marker.addListener("click", () => {
                    showMarkerDetails(marker);
                });

                markers.push(marker);
            });
        })
        .catch(error => console.error('Error loading marker data:', error));
}
