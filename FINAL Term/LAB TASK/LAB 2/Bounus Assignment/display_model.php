<?php
require_once('database.php');

function display(){
    $conn=getConnection();
    $sql="SELECT * FROM products WHERE showing='YES'";
    $result = mysqli_query($conn, $sql);
    return $result;
}
?>