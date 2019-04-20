// LeafletJS - Julien Minet - Feb 2817.

var Lmap, layer28km, layer32km, layer42km, layer56km;
var layer28km_visible = true;
var layer32km_visible = true;
var layer42km_visible = true;
var layer56km_visible = true;

function init() {
	Lmap = L.map('map').setView([49.775, 5.55], 13);

	// add an OpenStreetMap tile layer
	var osm = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(Lmap);

   /*var baseLayer = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}.{ext}', {
	      attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Icons from <a href="https://mapicons.mapsmarker.com">Maps Icons Collection</a>',
	      subdomains: 'abcd',
	      minZoom: 0,
	      maxZoom: 28,
	      ext: 'png'
   }).addTo(map);*/


  /* var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	   maxZoom: 17,
	   attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
   }).addTo(Lmap);*/

   // Put the zoom icon on the top right of the map
   Lmap.zoomControl.setPosition('topright')

	// add GeoJSON layer

	var style56km = {
       "color": "#2E2E2E",
       "weight": 8,
       "opacity": 0.70
   };
	layer56km = L.geoJson(vtt56km, {
		 style : style56km,
	    // onEachFeature: function (feature, layer) {
		  //   layer.bindPopup("<div id='popup'>VTT 56 km</div><div id='popup_wp'>Téléchargez la trace GPX</div>");
	    // }
	}).addTo(Lmap);

  var style42km = {
       "color": "#FFBF00",
       "weight": 8,
       "opacity": 0.70
   };
	layer42km = L.geoJson(vtt42km, {
		 style : style42km,
	    /*onEachFeature: function (feature, layer) {
		    layer.bindPopup("<div id='popup'>VTT 41 km</div><div id='popup_wp'>Téléchargez la trace GPX</div>");
	    }*/
	}).addTo(Lmap);

 	var style32km = {
       "color": "#7570b3",
       "weight": 8,
       "opacity": 0.70
   };
	layer32km = L.geoJson(vtt32km, {
		 style : style32km,
	    /*onEachFeature: function (feature, layer) {
		    layer.bindPopup("<div id='popup'>VTT 32 km</div><div id='popup_wp'>Téléchargez la trace GPX</div>");
	    }*/
	}).addTo(Lmap);

   var style28km = {
       "color": '#e7298a',
       "weight": 8,
       "opacity": 0.70
   };
	layer28km = L.geoJson(vtt28km, {
		 style : style28km,
	    /*onEachFeature: function (feature, layer) {
		    layer.bindPopup("<div id='popup'>VTT 28 km</div><div id='popup_wp'>Téléchargez la trace GPX</div>");
	    }*/
	}).addTo(Lmap);


	// Add start marker
	L.marker([49.72717,5.53129]).addTo(Lmap).bindPopup('<div id="popup"><b>Départ</b><p>Ecole communale de Marbehan - Rue de la Rivière 37 - 6724 MARBEHAN<p></div>');
}

function toggleLayer28km() {
	if (layer28km_visible === true){
		layer28km_visible = false;
      Lmap.removeLayer(layer28km);
      // change button state
      $('li#vtt28km')[0].children[1].children[0].innerHTML = 'OFF';
   }else{
      layer28km_visible = true;
      Lmap.addLayer(layer28km);
      // change button state
      $('li#vtt28km')[0].children[1].children[0].innerHTML = 'ON';
   }
}

function toggleLayer32km() {
	if (layer32km_visible === true){
		layer32km_visible = false;
      Lmap.removeLayer(layer32km);
      // change button state
      $('li#vtt32km')[0].children[1].children[0].innerHTML = 'OFF';
   }else{
      layer32km_visible = true;
      Lmap.addLayer(layer32km);
      // change button state
      $('li#vtt32km')[0].children[1].children[0].innerHTML = 'ON';
   }
}

function toggleLayer42km() {
	if (layer42km_visible === true){
		layer42km_visible = false;
      Lmap.removeLayer(layer42km);
      // change button state
      $('li#vtt42km')[0].children[1].children[0].innerHTML = 'OFF';
   }else{
      layer42km_visible = true;
      Lmap.addLayer(layer42km);
      // change button state
      $('li#vtt42km')[0].children[1].children[0].innerHTML = 'ON';
   }
}

function toggleLayer56km() {
	if (layer56km_visible === true){
		layer56km_visible = false;
      Lmap.removeLayer(layer56km);
      // change button state
      $('li#vtt56km')[0].children[1].children[0].innerHTML = 'OFF';
   }else{
      layer56km_visible = true;
      Lmap.addLayer(layer56km);
      // change button state
      $('li#vtt56km')[0].children[1].children[0].innerHTML = 'ON';
   }
}


/*function toggleLayer(distance) {
	var layer = 'layer' + distance + 'km';
	var layer_visibility = layer + '_visible';
	var li = 'li#vtt' + distance + 'km';

	if (eval(layer_visibility) === true){
		//eval(layer_visibility) = false;
      Lmap.removeLayer(eval(layer));
      // change button state
      var truc = $(eval(li))[0].children[1].children[0].innerHTML = 'OFF';
      console.log(truc)
   }else{
      //eval(layer_visibility) = true;
      Lmap.addLayer(eval(layer));
      // change button state
      $('')
   }
}
*/
