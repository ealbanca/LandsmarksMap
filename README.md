# Overview

This web-based application shows some landmarks in Idaho Falls using the Google Maps JavaScript API. Visitors can explore a map view of the city and filter interactive markers by category: Parks, Museums, and Historical Sites.

Some of the features are: 
* Dynamic Google Map Integration: Displays a zoomable and interactive map centered on Idaho Falls.
* Filterable Markers: Users can filter points of interest by type (All, Park, Museum, Historical).
* Marker Popups: Clicking a marker updates a display section with information, including images, descriptions, and external links(learn more).
* Modular JavaScript: mapview.js: Initializes the map and loads markers from a JSON file. filterMarkers.js: Handles logic to filter markers based on category. display.js: Manages the display area that shows marker information.

[Demo Video](https://youtu.be/2QH1ocDQJDU)

# Development Environment
* Google Maps JavaScript API
* JavaScript
* HTML
* CSS

# Useful Websites
* [Maps JavaScript API](https://developers.google.com/maps/documentation/javascript)
* [W3Schools](https://www.w3schools.com/graphics/google_maps_intro.asp)
* [Tutorials Point](https://www.tutorialspoint.com/google_maps/index.htm)

# Future Work
* Add a "hover" to the markers when selected. Since the markers are not part of the DOM, they need to be edited or scaled using the Google Maps API.
* Enable users to submit new landmarks through a form, and store those markers in local storage.
* Use the browser's geolocation API to show the user’s current location on the map.
* Integrate local news or event feeds related to Idaho Falls landmarks using APIs or RSS.
