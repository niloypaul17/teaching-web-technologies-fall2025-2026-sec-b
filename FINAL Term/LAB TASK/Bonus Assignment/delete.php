<?php
require_once('delete_valid.php');
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
    </style>
    <body>
        <center>
            <form method="post">
                <fieldset id="f1">
                    <legend>DELETE PRODUCT</legend>
                    <?php foreach($R as $u){ ?>
                    Name: <?php echo $u['name']?><br>
                    Buying Price: <?php echo $u['buying_price']?><br>
                    Selling Price: <?php echo $u['selling_price']?><br>
                    Displayable: <?php if($u['showing']=="Yes"){echo "Yes";} else{ echo "No";}?>
                    <hr>
                    <input type="submit" value="Delete">
                    <?php } ?>
                </fieldset>
            </form>
        </center>
    </body>
</html>