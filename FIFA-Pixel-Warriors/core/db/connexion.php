<?php
$host = 'localhost';
$username = 'root';
$password = '';
$database = 'shimatch';

try{
    $connexion = mysqli_connect($host,$username,$password,$database);
}catch(Exception $e){

   $error = str_replace('{{content}}',$e->getMessage(),include(__DIR__ .'\..\errors\errors.php'));

}

?>