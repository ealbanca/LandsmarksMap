function filterMarkers() {
    const selectedType = document.getElementById("filter").value;
    markers.forEach(marker => {
        if (selectedType === "all" || marker.type === selectedType) {
            marker.setMap(map);  // show marker
        } else {
            marker.setMap(null); // hide marker
        }
    });
}
