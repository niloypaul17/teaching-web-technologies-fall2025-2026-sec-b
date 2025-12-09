<?php
echo "<h3>Task 7 - Printing Shapes using Nested Loops</h3>";

// Shape 1: Star Triangle
echo "<pre>";
echo "*<br>";
echo "* *<br>";
echo "* * *<br>";
echo "</pre>";

// Or generate dynamically (better for learning)
echo "<h4>1. Star Triangle</h4>";
echo "<pre>";
for ($i = 1; $i <= 3; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo "* ";
    }
    echo "<br>";
}
echo "</pre><br>";

// Shape 2: Number Pattern (Inverted)
echo "<h4>2. Number Pattern</h4>";
echo "<pre>";
for ($i = 3; $i >= 1; $i--) {
    for ($j = 1; $j <= $i; $j++) {
        echo $j . " ";
    }
    echo "<br>";
}
echo "</pre><br>";

// Shape 3: Alphabet Triangle
echo "<h4>3. Alphabet Triangle</h4>";
echo "<pre>";
$start = 65; // ASCII for 'A'
for ($i = 1; $i <= 3; $i++) {
    for ($j = 0; $j < $i; $j++) {
        echo chr($start) . " ";
        $start++;
    }
    echo "<br>";
}
echo "</pre>";
?>