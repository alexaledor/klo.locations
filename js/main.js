$(function () {

    ['region','city','type'].forEach(function (item) {
        createSelect(item,0);
    });

    var params = {
        idRegion: 0,
        idCity: 0,
        idType: 0,
    };
    showMarkers(params);

    $.ajax({
        type: "POST",
        url: "/json/ukraine-line.json",
        dataType: 'json',
        success: function (response) {
            var borderStyle = {
                "color" : "blue" ,
                "weight" : 2 ,
                "opacity" :.5
            };
            L.geoJson(response, {style : borderStyle}).addTo(map);
        }
    });

    $('#select-region').change(function () {
        params = {
            idRegion: $(this).val(),
            idCity: 0,
            idType: 0
        };
        createSelect('city',params.idRegion,'region');
        createSelect('type',params.idRegion,'region');
        showMarkers(params);
    });

    $('#select-city').change(function () {
        params = {
            idRegion: $('#select-region').val(),
            idCity: $(this).val(),
            idType: 0,
        };
        createSelect('type', params.idCity,'city',params.idRegion);//model,val,from
        showMarkers(params);
    });

    $('#select-type').change(function () {
        params = {
            idRegion: $('#select-region').val(),
            idCity: $('#select-city').val(),
            idType: $(this).val()
        };
        showMarkers(params);
    });

});

function createSelect(model,val,from,id_region){

    //console.log(model,val,from);

    $.ajax({
        type: "POST",
        url: "/model/selector.php",
        data: {value: val,from: from,model: model,id_region: id_region},
        dataType: 'json',
        success: function (response) {

            console.log('select',response);

            if (response.length < 1){
                $('#select-'+ model).attr('disabled',true);
            } else {
                $('#select-'+ model).attr('disabled',false);
            }

            var str = '<option value="0"> - не визначено -</option>';
            response.forEach(function (item) {
                str += '<option value="'+ item['ID']+'">'+ item['NAME']+'</option>';
            });
            $('#select-'+ model).html(str).val(0);
        }
    });
}

function showMarkers(params) {

    console.log(params);

    $.ajax({
        type: "POST",
        url: "/model/locations.php",
        data: {
            idRegion: params.idRegion,
            idCity: params.idCity,
            idType: params.idType,
        },
        dataType: 'json',
        success: function (response) {

            console.log('map',response);

            if (arrayLayerGroup['cluster'] != undefined) {
                arrayLayerGroup['cluster'].clearLayers();
            }

            response.forEach(function (item) {

                var region_name = (item['ID_REGION'] == 26) ? item['REGION'] : item['REGION'] + ' область';

                var popupText = '<b style="color: blue">'+ region_name +'</b><br><b>' + item['TYPE'] + '</b><br>' + item['ADDRESS'];

                var myIcon = L.icon({
                    //iconUrl: '/lib/Leaflet/images/marker-icon.png',
                    iconUrl: '/img/' + item['MARKER'],
                    shadowUrl: '/img/marker-shadow.png',
                    shadowSize: [41, 41],
                    iconAnchor: [15, 35],
                    shadowAnchor: [12, 40],
                    popupAnchor: [2, -34]
                });

                var marker = L.marker([item['LAT'], item['LNG']], {icon: myIcon}).bindPopup(popupText);
                arrayLayerGroup['cluster'].addLayer(marker);
                if (response.length < 2){
                    map.setView([item['LAT'], item['LNG']], 10);
                } else {
                    map.setView([47.96579, 30.9043], 6);
                }
            })
        }
    });
}