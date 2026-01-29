<?php
require_once('../Controller/edit_valid.php');
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
                    <legend>ADD PRODUCT</legend>
                    <?php foreach($R as $u){ ?>
                    <label for="name">Name</label><br>
                    <input type="text" name="name" id="name" value="<?php echo $u['name'] ?>"><br>
                    <label for="buy">Buying Price</label><br>
                    <input type="number" id="buy" name="buy" value="<?php echo $u['buying_price'] ?>"required><br>
                    <label for="sell">Selling Price</label><br>
                    <input type="number" name="sell" id="sell" value="<?php echo $u['selling_price'] ?>" required><br>
                    <hr>
                    <input type="checkbox" name="display"> Display
                    <hr>
                    <input type="submit" value="SAVE">
                    <?php } ?>
                </fieldset>
            </form>
        </center>
    </body>
</html>