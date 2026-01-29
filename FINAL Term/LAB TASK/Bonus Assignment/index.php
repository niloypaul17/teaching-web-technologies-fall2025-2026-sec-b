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
            <form method="post" action="add_product.php">
                <fieldset id="f1">
                    <legend>ADD PRODUCT</legend>
                    <label for="name">Name</label><br>
                    <input type="text" name="name" id="name" required><br>
                    <label for="buy">Buying Price</label><br>
                    <input type="number" id="buy" name="buy" required><br>
                    <label for="sell">Selling Price</label><br>
                    <input type="number" name="sell" id="sell"><br>
                    <hr>
                    <input type="checkbox" name="display"> Display
                    <hr>
                    <input type="submit" value="SAVE">
                </fieldset>
            </form>
        </center>
    </body>
</html>