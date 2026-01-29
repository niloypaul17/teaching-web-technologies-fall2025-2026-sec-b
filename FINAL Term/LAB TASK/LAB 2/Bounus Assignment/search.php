<?php
require_once('display_model.php');
require_once('search_ajax.php');
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
            width: 300px;
            margin-top: 200px;
        }
        #T1{
            width: 300px;
        }
    </style>
    <body>
        <center>
                <fieldset id="f1">
                    <legend>SEARCH</legend>
                    <input type="text" id="name">
                    <input type="button" value="Search By Name" onclick="ajaxapply()">
                    <table border=1 id="T1">
                        <hr>
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
        </center>
    </body>
</html>