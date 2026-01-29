<?php
require_once('database.php');

function addproduct($name,$BP,$SP,$profit,$status){
    $conn=getConnection();
    $sql="INSERT INTO products(`name`, `buying_price`, `selling_price`, `profit`, `showing`) VALUES ('$name', $BP, $SP, $profit, '$status')";
    $result = mysqli_query($conn, $sql);
    return $result;
}
?>