<?php    

    
function delete(){
        include ("../core/db/connexion.php");

        $id = 1;
        $query = "DELETE FROM player WHERE id_player =" .$id;

        try{
            mysqli_query($connexion, $query);
        }
        catch (Exception $e){
            echo "This is error : " . $e->getMessage();
        }
        
    }

    
?>