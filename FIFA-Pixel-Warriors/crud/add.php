<?php
    include ("../core/db/connexion.php");
    

    function create(){
        $query = "insert into player(nom ,img ,positionplayer ,rating ,pace ,shooting ,passing ,dribbling ,defending ,diving,handling, kicking, reflexes, physical, speed, positioning, id_club, id_nationalite) VALUES ('messi12','aaa','gk',50,54,14,68,64,78,94,55,33,50,54,84,55,1,1);";
        
        mysqli_query($connexion, $query);
    }

?>