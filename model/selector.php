<?php
require_once('../class/Service.class.php');
$service = new Service();
$mysqli = $service->mysqlConnect();

$response = array();
$sqlWhere = '';

$table = $_POST['model'];
if ($_POST['value'] != 0){

    if ($_POST['from'] == 'region'){//Змінився селект "регіон" - формуємо почергово два селекта

        if ($_POST['model'] == 'city') $sqlWhere = ' WHERE ID_REGION = ? ';//формування селекта "місто"
        //формування селекта "тип"
        if ($_POST['model'] == 'type') $sqlWhere = ' WHERE type.ID IN (SELECT locations.ID_TYPE FROM locations WHERE locations.ID_CITY IN (SELECT city.ID FROM city WHERE  city.ID_REGION = ? ))';
    }

    if ($_POST['from'] == 'city'){//змінився селект "місто" - формуємо селект "тип"

        $sqlWhere = ' WHERE type.ID IN (SELECT locations.ID_TYPE FROM locations WHERE locations.ID_CITY = ? ) ';
    }
}

if (isset($_POST['id_region'])){
    if (($_POST['value'] == 0) && ($_POST['model'] == 'type') && ($_POST['id_region'] != 0)){
        $sqlWhere = ' WHERE type.ID IN (SELECT locations.ID_TYPE FROM locations WHERE locations.ID_CITY IN (SELECT city.ID FROM city WHERE  city.ID_REGION = ? ))';
    }
}

$sql = "SELECT * FROM ".$table.$sqlWhere;

$stm = $mysqli -> prepare($sql);

if ($_POST['value'] != 0) $stm -> bind_param('i',$_POST['value']);

if (isset($_POST['id_region'])){
    if (($_POST['value'] == 0) && ($_POST['model'] == 'type') && ($_POST['id_region'] != 0)){
        $stm -> bind_param('i',$_POST['id_region']);
    }
}

$stm -> execute();
$res = $stm -> get_result();

while ($row = $res -> fetch_array()) {
    $subArr = array(
        'ID' => $row['ID'],
        'NAME' => $row['NAME'],
    );
    array_push($response, $subArr);
};

echo json_encode($response);