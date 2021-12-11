// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object object with center and zoom level
let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'streets' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/staceycatherine/Mapping_Earthquakes/main/majorAirports.json";

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
    
//     // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) {
//         console.log(layer);
        
//         layer.bindPopup("<h2>"+ feature.properties.name + "</h2>" + "<h3>" + feature.properties.city + ", "  + feature.properties.state + "</h3>");
// }

// }).addTo(map);

// Grabbing our GeoJSON data.
d3.json(airportData).then(function(data) {
    console.log(data);
    // Creating a GeoJSON layer with the retrieved data.
    L.geoJson(data).addTo(map)
    .bindPopup();
});








