// This function displays the markers information on the display element
function showMarkerDetails(marker) {
    // Variable to get element display
    const display = document.getElementById("display");
    // Variable html that stores h3, image and it's properties, the description and link
    const html = `
        <h3>${marker.title}</h3>
        ${marker.image ? `<img src="${marker.image}" alt="${marker.title}" class="marker-image">` : ''}
        <p>${marker.description || "No story available."}</p>
        ${marker.link ? `<p><a href="${marker.link}" target="_blank">Learn more</a></p>` : ''}
    `;
    // Called html variable
    display.innerHTML = html;
}