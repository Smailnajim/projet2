<?php
    //inclod config file
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $firstName = $_POST["Fname"];
        $lastName = $_POST["lname"];
        $photoP = $_POST["photo"];
        $rang = $_POST["totalEnerge"];
        $positionP = $_POST["position"];

        include "dbcon.inc.php";
        $query = "INSERT INTO players (name, lastname, photo, position, totalEnerge) VALUES (?, ?, ?, ?, ?)";
        $stmt = $pdo->prepar($query);
        $stmt->execute([$firstName, $lastName, $photoP, $rang, $positionP]);

        $pdo = null;
        $stmt = null;

        header("Location: ./C:\xampp\htdocs\FIFA-Pixel-Warriors\php\addToDB.HTML");
    }
?>