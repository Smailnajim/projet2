   <?php
   
   function findall($table, $columns){
    include ("../core/db/connexion.php");

    
    $query = "SELECT ". $columns ." FROM ".$table;

    echo "<br />";
    echo "<br />";

    echo $query;


    echo "<br />";
    echo "<br />";

    // $result=mysqli_query($query);


    try{
        $result = mysqli_query($connexion, $query);
        
        // $row=mysqli_fetch_array($result);
       
        while ($row=mysqli_fetch_array($result)){
            var_dump($row);
            
        }
    }
    catch (Exception $e){
        echo "This is error : " . $e->getMessage();
        
    }
}


   
   
   
   
   
   ?>