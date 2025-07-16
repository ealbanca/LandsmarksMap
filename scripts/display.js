function showMarkerDetails(marker) {
    const display = document.getElementById("display");

    const html = `
        <h3>${marker.title}</h3>
        ${marker.image ? `<img src="${marker.image}" alt="${marker.title}" class="marker-image">` : ''}
        <p>${marker.description || "No story available."}</p>
        ${marker.link ? `<p><a href="${marker.link}" target="_blank">Learn more</a></p>` : ''}
    `;

    display.innerHTML = html;
}