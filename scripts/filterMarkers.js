function filterMarkersByType(type) {
    markers.forEach(marker => {
        if (type === "all" || marker.type === type) {
            marker.setMap(map); // show marker
        } else {
            marker.setMap(null); // hide marker
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const filterList = document.getElementById("filter");

    filterList.addEventListener("click", (e) => {
        if (e.target && e.target.tagName === "LI") {
            const selectedType = e.target.getAttribute("data-type");

            // Remove "selected" from all list items
            [...filterList.children].forEach(li => li.classList.remove("selected"));

            // Add "selected" to the clicked item
            e.target.classList.add("selected");

            // Filter markers by selected type
            filterMarkersByType(selectedType);
        }
    });
});