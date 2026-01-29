<?php
require_once('database.php');

function edit($name){
    $conn=getConnection();
    $sql="SELECT * FROM products WHERE name='{$name}'";
    $result = mysqli_query($conn, $sql);
    return $result;
}
function update($n,$name,$BP,$SP,$profit,$status){
    $conn=getConnection();
    $sql="UPDATE `products` SET `name`='$name',`buying_price`=$BP,`selling_price`='$SP',`profit`='$profit',`showing`='$status' WHERE name='{$n}'";
    $result = mysqli_query($conn, $sql);
    return $result;
}
?>