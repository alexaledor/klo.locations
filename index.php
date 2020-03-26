<?php
require_once ('/class/Service.class.php');
$service = new Service();
?>
<!doctype html>
<html lang="en">
<head>
    <link href="/css/main.css" rel="stylesheet">
    <link href="/lib/Bootstrap/css/bootstrap.css" rel="stylesheet">
    <link rel="stylesheet" href="/lib/Leaflet/leaflet.css">
    <link rel="stylesheet" href="/lib/Leaflet/MarkerCluster.Default.css">

    <script src="/lib/JQuery/jquery-1.12.4.js"></script>
    <script src="/lib/Leaflet/leaflet-src.js"></script>
    <script src="/lib/Leaflet/leaflet.markercluster-src.js"></script>
</head>
<body>
<div class="container-fluid">
    <div class="row" style="height: 50px;"></div>
    <div class="row">
        <div class="col-lg-2"></div>
        <div class="col-lg-6">
            <div id="map"></div>
        </div>
        <div class="col-lg-2">
            <div class="row" style="margin-top: 15px;">
                <div class="col-lg-12">
                    <label class="control-label">Область:</label>
                    <select id="select-region" class="form-control"></select>
                </div>
            </div>
            <div class="row" style="margin-top: 15px;">
                <div class="col-lg-12">
                    <label>Місто:</label>
                    <select id="select-city" class="form-control"></select>
                </div>
            </div>
            <div class="row" style="margin-top: 15px;">
                <div class="col-lg-12">
                    <label>Тип:</label>
                    <select id="select-type" class="form-control"></select>
                </div>
            </div>
        </div>
    </div>
</div>
<script src="/lib/Leaflet/map/leafletMap.js"></script>
<script src="/lib/Leaflet/map/getMarkerCluster.js"></script>
<script src="/js/main.js"></script>
</body>
</html>