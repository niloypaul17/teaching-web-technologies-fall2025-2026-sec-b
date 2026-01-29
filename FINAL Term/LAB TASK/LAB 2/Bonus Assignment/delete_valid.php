<?php
require_once('delete_model.php');

if(isset($_GET["name"])){
    $n=$_GET["name"];
}

$R=delete($n);

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $R2=deleteproduct($n);
    if($R2){
        header("Location: display.php");
        exit;
    }
}
?>