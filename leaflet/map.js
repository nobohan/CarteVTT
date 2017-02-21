// LaefletJS - Julien Minet - Feb 2017. 

function init() {
	var map = L.map('map').setView([49.73, 5.58], 13);
	
	// add an OpenStreetMap tile layer
	var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
	
   /*var baseLayer = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
	      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Icons from <a href="https://mapicons.mapsmarker.com">Maps Icons Collection</a>',
	      subdomains: 'abcd',
	      minZoom: 0,
	      maxZoom: 20,
	      ext: 'png'
   }).addTo(map);*/
	
	
	// add GeoJSON layer
   var myStyle = {
       "color": "#FF2400",
       "weight": 5,
       "opacity": 0.85
   };	
	
	L.geoJson(geojson, {
		 style : myStyle, 
	    onEachFeature: function (feature, layer) {
		    layer.bindPopup("<div id='popup'>Promenade des 4 fils Aymon</div><div id='popup'>Distance: 8 km</div><div id='popup_wp'>Téléchargez la trace GPX</div>");
	    }
	}).addTo(map);
}