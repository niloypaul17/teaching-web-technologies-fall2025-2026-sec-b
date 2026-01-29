<?php
require_once('add_product_model.php');

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $name=$_POST["name"];
    $BP=$_POST["buy"];
    $SP=$_POST["sell"];
    $profit=$SP-$BP;
    $status=isset($_POST["display"]) ? "Yes" : "No";

    $R=addproduct($name,$BP,$SP,$profit,$status);

    if($R){
        header("Location: display.php");
        exit;
    }
}
?>