<?php
    $con = mysqli_connect("localhost", "root", "", "ultimate_tame");
    
    if(mysqli_connect_errno()){
        echo "error in connect to data base : ".mysqli_connect_error();
    }
?>
