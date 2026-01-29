<?php
header('Content-Type: application/json');
require_once('database.php');

function dataa($name){
$con = getConnection();
$sql ="SELECT * FROM products WHERE name='{$name}'";
$r = mysqli_query($con, $sql);
if($r && $r->num_rows ==1){
$result=mysqli_fetch_assoc($r);
$p = ['name'=>$result["name"],
      'profit'=>$result["profit"]];
return json_encode($p);
}
}

if (isset($_POST['product'])) {
    $u = json_decode($_POST['product'], true);

    if (isset($u['name'])) {
        echo dataa($u['name']);
        exit;
    }
}
?>