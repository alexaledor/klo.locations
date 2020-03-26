<?php

require_once ('../class/Service.class.php');
$service = new Service();
$pdo = $service ->mysqlConnectPdo();

$response = array();
$sqlWhere = '';

if ($_POST['idRegion'] != 0){
    $sqlWhere = " WHERE locations.ID_CITY IN (SELECT city.ID FROM city WHERE city.ID_REGION = :idRegion)";
    if ($_POST['idCity'] != 0) $sqlWhere .= " AND locations.ID_CITY = :idCity ";
    if ($_POST['idType'] != 0) $sqlWhere .= " AND locations.ID_TYPE = :idType ";
}

else if ($_POST['idCity'] != 0){
    $sqlWhere = " WHERE locations.ID_CITY = :idCity ";
    if ($_POST['idType'] != 0) $sqlWhere .= " AND locations.ID_TYPE = :idType ";
    if ($_POST['idRegion'] != 0) $sqlWhere .= " AND locations.ID_CITY IN (SELECT city.ID FROM city WHERE city.ID_REGION = :idRegion )";
}

else if ($_POST['idType'] != 0){
    $sqlWhere = " WHERE locations.ID_TYPE = :idType ";
    if ($_POST['idRegion'] != 0) $sqlWhere .= " AND locations.ID_CITY IN (SELECT city.ID FROM city WHERE city.ID_REGION = :idRegion) ";
    if ($_POST['idCity'] != 0) $sqlWhere .= " AND locations.ID_CITY = :idCity ";
}

$sql = "SELECT locations.ID as ID,
                locations.LAT as LAT,
                locations.LNG as LNG,
                locations.ADDRESS as ADDRESS,
                type.NAME as TYPE,
                type.MARKER as MARKER,
                city.NAME as CITY,
                city.ID as ID_CITY,
                region.NAME as REGION,                  
                region.ID as ID_REGION                  
            FROM locations 
            INNER JOIN type ON type.ID = locations.ID_TYPE 
            INNER JOIN city ON city.ID = locations.ID_CITY 
            INNER JOIN region ON region.ID = city.ID_REGION ".$sqlWhere;

$stm = $pdo -> prepare($sql);

if ($_POST['idRegion'] != 0) $stm -> bindParam(':idRegion',$_POST['idRegion'],PDO::PARAM_INT);
if ($_POST['idCity'] != 0) $stm -> bindParam(':idCity',$_POST['idCity'],PDO::PARAM_INT);
if ($_POST['idType'] != 0) $stm -> bindParam(':idType',$_POST['idType'],PDO::PARAM_INT);

$stm -> execute();

while ($row = $stm -> fetch()) {
    $subArr = array(
        'ID' => $row['ID'],
        'TYPE' => $row['TYPE'],
        'CITY' => $row['CITY'],
        'ID_CITY' => $row['ID_CITY'],
        'REGION' => $row['REGION'],
        'ID_REGION' => $row['ID_REGION'],
        'LAT' => $row['LAT'],
        'LNG' => $row['LNG'],
        'ADDRESS' => $row['ADDRESS'],
        'MARKER' => $row['MARKER']
    );
    array_push($response, $subArr);
};
echo json_encode($response);