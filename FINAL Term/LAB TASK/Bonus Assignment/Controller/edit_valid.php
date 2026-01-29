<?php
require_once('../Model/edit_model.php');

if(isset($_GET["name"])){
    $n=$_GET["name"];
}

$R=edit($n);

if($_SERVER["REQUEST_METHOD"]=="POST"){
    $name=$_POST["name"];
    $BP=$_POST["buy"];
    $SP=$_POST["sell"];
    $profit=$SP-$BP;
    $status=isset($_POST["display"]) ? "Yes" : "No";

    $R2=update($n,$name,$BP,$SP,$profit,$status);

    if($R2){
        header("Location: display.php");
        exit;
    }
}
?>