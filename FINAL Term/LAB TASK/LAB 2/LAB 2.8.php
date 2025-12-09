<?php
// Declare the 2D array based on the patterns
$array = [
    [1, 2, 3],
    [1, 2],
    [1],
    ['A'],
    ['B', 'C'],
    ['D', 'E', 'F']
];

// Print the shapes using nested loops
for ($i = 0; $i < count($array); $i++) {
    for ($j = 0; $j < count($array[$i]); $j++) {
        echo $array[$i][$j] . " ";
    }
    echo "<br>";
}
?>