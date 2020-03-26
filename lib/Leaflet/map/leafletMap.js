var OSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    minZoom: 2,
    attribution: '© OpenStreetMap contributors. Tiles: CC-BY-SA 2.0\r\nMap data © OpenStreetMap contributors'
});

var googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '© GoogleStreets contributors.'
});

var googleHybrid = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '© GoogleHybrid contributors.'
});

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '© GoogleSatMap contributors.'
});

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 17,
    attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var OpenMapSurfer_Roads = L.tileLayer('https://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
    maxZoom: 20,
    attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var Esri_NatGeoWorldMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC',
    maxZoom: 16
});

var centreMapLat = 47.96579;
var centreMapLng = 30.9043;
var mapZoom = 6;

//http://{s}.tile.osm.org/{z}/{x}/{y}.png
//Tiles/{z}/{x}/{y}.png
var osmUrl = 'http://gis/Tiles/{z}/{x}/{y}.png',
    osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    osm = L.tileLayer(osmUrl, {maxZoom: 16, attribution: osmAttrib}),
    map = new L.Map('map', {center: new L.LatLng(47.96579, 30.9043), zoom: 6}),
    drawnItems = L.featureGroup().addTo(map);

//Кнопки зума
map.zoomControl.setPosition('topright');

OSM.addTo(map);

map.addControl(new L.Control.Layers({ //Панель переключения слоев
        'Esri_WorldImagery':Esri_WorldImagery,
        //'Esri_NatGeoWorldMap':Esri_NatGeoWorldMap,
        //'OpenMapSurfer_Roads':OpenMapSurfer_Roads,
        //'OpenTopoMap':OpenTopoMap,
        'OpenStreetMap':OSM,
        'GoogleStreets':googleStreets,
        'GoogleHybrid':googleHybrid,
        'GoogleSat':googleSat
},
{}));

L.control.scale({position:'bottomright', imperial: true}).addTo(map); //масштабная линейка (внизу, справа)

var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: '/libraries/Leaflet/images/marker-shadow.png',
        iconSize:     [32, 37],
        shadowSize:   [41, 41],
        iconAnchor:   [15, 35],
        shadowAnchor: [12, 40],
        popupAnchor:  [2, -34]
    }
});