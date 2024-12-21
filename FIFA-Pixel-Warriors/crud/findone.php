<?php
   
   function findone($table, $id){
    include ("../core/db/connexion.php");

    $query = "SELECT * FROM ".$table." WHERE id_".$table."=".$id;

    // $result=mysqli_query($query);


    try{
        $result = mysqli_query($connexion, $query);
        
        $row=mysqli_fetch_assoc($result);
        var_dump($row);
    }
    catch (Exception $e){
        echo "This is error : " . $e->getMessage();
        
    }
}
   
   
   
   
   
   ?>