var marker_icon = '/img/marker-icon.png';

var icon = new LeafIcon({
    iconUrl: marker_icon,
    iconSize: [25,41],
});

var arrayLayerGroup = [];

arrayLayerGroup['cluster'] = L.markerClusterGroup({
    iconCreateFunction: function(cluster) {
        return L.divIcon({ html: "<img src="+ marker_icon +" /><div>" + cluster.getChildCount() + "</div>",
            className: 'mycluster',
            iconSize: L.point(35, 35),
        });
    }
}).addTo(map);