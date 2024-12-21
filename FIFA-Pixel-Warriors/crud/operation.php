<?php
include 'delete.php';
include 'findone.php';
include 'findall.php';
include 'update.php';

$id=$_GET['id'];
$table=$_GET['table'];

// echo $id ;
// echo $table;

$columns = [];

// findone($table,$id);
// findall($table);

$columns = "";

foreach ($_GET as $key => $value) {
    if ($key != 'table') {
        $columns = $columns . "". $key . ",";
    }
}



// echo $columns;

findall($table, rtrim($columns, ","));





?>