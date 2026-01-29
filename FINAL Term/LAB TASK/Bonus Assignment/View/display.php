<?php
require_once('../Model/display_model.php');
?>
<!DOCTYPE html>
<html>
    <head>
        <title>
            Assignment 1
        </title>
    </head>
    <style>
        #f1{
            text-align: left;
            width: 100px;
            margin-top: 200px;
        }
    </style>
    <body>
        <center>
                <fieldset id="f1">
                    <legend>DISPLAY</legend>
                    <table border=1>
                        <tr>
                            <th><b>NAME</b></th>
                            <th><b>PROFIT</b></th>
                        </tr>
                        <?php foreach(display() as $u){ ?>
                        <tr>
                            <td><?php echo $u['name']; ?></td>
                            <td><?php echo $u['profit']; ?></td>
                            <td>
                                <a href="edit.php?name=<?=$u['name']?>"> edit </a> 
                            </td>
                            <td>
                                <a href="delete.php?name=<?=$u['name']?>"> delete </a>
                            </td>
                        </tr>
                        <?php } ?>
                    </table>
                </fieldset>
                <br>
                <button onclick="window.location.href='search.php'">Search</button>
        </center>
    </body>
</html>