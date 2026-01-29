<?php
require_once('database.php');

function delete($name){
    $conn=getConnection();
    $sql="SELECT * FROM products WHERE name='{$name}'";
    $result = mysqli_query($conn, $sql);
    return $result;
}
function deleteproduct($name){
    $conn=getConnection();
    $sql="DELETE FROM `products` WHERE name='{$name}'";
    $result = mysqli_query($conn, $sql);
    return $result;
}
?>