<?php
   
   function update(){
    include ("../core/db/connexion.php");
    $id=2;
    
    $query = "UPDATE player SET  nom = 'hakimi' where id_player=".$id;

    // $result=mysqli_query($query);


    try{
         mysqli_query($connexion, $query);
        
        // $row=mysqli_fetch_array($result);
        
    }
    catch (Exception $e){
        echo "This is error : " . $e->getMessage();
        
    }
}


   
   
   
   
   
   ?>