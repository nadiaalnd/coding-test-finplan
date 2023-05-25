<?php

// Input form user
echo "Masukkan nilai N: ";
$N = trim(fgets(STDIN));

echo "Masukkan nilai awal: ";
$start = trim(fgets(STDIN));

$i = 1;
while ($i <= $N) {
    if ($start % 3 == 0 && $start % 7 == 0) {
        echo 'Z ';
        $i++;
    } else if ($start % 3 == 0 || $start % 7 == 0) {
        echo $start . ' ';
        $i++;
    }
    $start++;
}
