// LeafletJS - Julien Minet - Feb 2017. 

var Lmap, layer20km, layer27km, layer10km, layer39km, layer54km;
var layer10km_visible = true;
var layer20km_visible = true;
var layer27km_visible = true;
var layer39km_visible = true;
var layer54km_visible = true;
   
function init() {
	Lmap = L.map('map').setView([49.73, 5.58], 13);
	
	// add an OpenStreetMap tile layer
	/*var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(Lmap);
	
   /*var baseLayer = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
	      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Icons from <a href="https://mapicons.mapsmarker.com">Maps Icons Collection</a>',
	      subdomains: 'abcd',
	      minZoom: 0,
	      maxZoom: 20,
	      ext: 'png'
   }).addTo(map);*/
	
	
   var OpenTopoMap = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	   maxZoom: 17,
	   attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
   }).addTo(Lmap);	
	
   // Put the zoom icon on the top right of the map
   Lmap.zoomControl.setPosition('topright')	
	
	
	
	// add GeoJSON layer
 	var style10km = {
       "color": '#1b9e77',
       "weight": 5,
       "opacity": 0.75
   };	
	layer10km = L.geoJson(vtt10km, {
		 style : style10km, 
	    onEachFeature: function (feature, layer) {
		    layer.bindPopup("<div id='popup'>VTT 10 km</div><div id='popup_wp'>Téléchargez la trace GPX</div>");
	    }
	}).addTo(Lmap);	
	
   var style20km = {
       "color": '#d95f02',
       "weight": 5,
       "opacity": 0.75
   };	
	layer20km = L.geoJson(vtt20km, {
		 style : style20km, 
	    onEachFeature: function (feature, layer) {
		    layer.bindPopup("<div id='popup'>VTT 20 km</div><div id='popup_wp'>Téléchargez la trace GPX</div>");
	    }
	}).addTo(Lmap);
	
	var style27km = {
       "color": "#7570b3",
       "weight": 5,
       "opacity": 0.75
   };	
	layer27km = L.geoJson(vtt27km, {
		 style : style27km, 
	    onEachFeature: function (feature, layer) {
		    layer.bindPopup("<div id='popup'>VTT 27 km</div><div id='popup_wp'>Téléchargez la trace GPX</div>");
	    }
	}).addTo(Lmap);
	
 	var style39km = {
       "color": "#e7298a",
       "weight": 5,
       "opacity": 0.75
   };	
	layer39km = L.geoJson(vtt39km, {
		 style : style39km, 
	    onEachFeature: function (feature, layer) {
		    layer.bindPopup("<div id='popup'>VTT 39 km</div><div id='popup_wp'>Téléchargez la trace GPX</div>");
	    }
	}).addTo(Lmap);
	
	var style54km = {
       "color": "#66a61e",
       "weight": 5,
       "opacity": 0.75
   };	
	layer54km = L.geoJson(vtt54km, {
		 style : style54km, 
	    onEachFeature: function (feature, layer) {
		    layer.bindPopup("<div id='popup'>VTT 54 km</div><div id='popup_wp'>Téléchargez la trace GPX</div>");
	    }
	}).addTo(Lmap);
		
}


function toggleLayer10km() {	
	if (layer10km_visible === true){
		layer10km_visible = false; 
      Lmap.removeLayer(layer10km);
      // change button state
      $('li#vtt10km')[0].children[1].innerHTML = 'OFF';
   }else{
      layer10km_visible = true; 
      Lmap.addLayer(layer10km);
      // change button state
      $('li#vtt10km')[0].children[1].innerHTML = 'ON';  
   }
}      

function toggleLayer20km() {	
	if (layer20km_visible === true){
		layer20km_visible = false; 
      Lmap.removeLayer(layer20km);
      // change button state
      $('li#vtt20km')[0].children[1].innerHTML = 'OFF';
   }else{
      layer20km_visible = true; 
      Lmap.addLayer(layer20km);
      // change button state
      $('li#vtt20km')[0].children[1].innerHTML = 'ON';  
   }
} 

function toggleLayer27km() {	
	if (layer27km_visible === true){
		layer27km_visible = false; 
      Lmap.removeLayer(layer27km);
      // change button state
      $('li#vtt27km')[0].children[1].innerHTML = 'OFF';
   }else{
      layer27km_visible = true; 
      Lmap.addLayer(layer27km);
      // change button state
      $('li#vtt27km')[0].children[1].innerHTML = 'ON';  
   }
} 

function toggleLayer39km() {	
	if (layer39km_visible === true){
		layer39km_visible = false; 
      Lmap.removeLayer(layer39km);
      // change button state
      $('li#vtt39km')[0].children[1].innerHTML = 'OFF';
   }else{
      layer39km_visible = true; 
      Lmap.addLayer(layer39km);
      // change button state
      $('li#vtt39km')[0].children[1].innerHTML = 'ON';  
   }
} 

function toggleLayer54km() {	
	if (layer54km_visible === true){
		layer54km_visible = false; 
      Lmap.removeLayer(layer54km);
      // change button state
      $('li#vtt54km')[0].children[1].innerHTML = 'OFF';
   }else{
      layer54km_visible = true; 
      Lmap.addLayer(layer54km);
      // change button state
      $('li#vtt54km')[0].children[1].innerHTML = 'ON';  
   }
} 





/*function toggleLayer(distance) {
	var layer = 'layer' + distance + 'km';
	var layer_visibility = layer + '_visible';
	var li = 'vtt' + distance + 'km';
	
	if (eval(layer_visibility) === true){
		//eval(layer_visibility) = false; 
      Lmap.removeLayer(eval(layer));
      // change button state
      var truc = $(eval(li))[0].innerHTML 
      console.log(truc)
   }else{
      //eval(layer_visibility) = true; 
      Lmap.addLayer(eval(layer));
      // change button state
      $('')
   }    
}
*/