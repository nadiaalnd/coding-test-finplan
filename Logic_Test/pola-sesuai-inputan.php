<?php

function generatePattern($N, $i = 1, $j = 1)
{
  if ($i > $N) {
    return;
  }

  if ($j > $N) {
    echo "\n";
    generatePattern($N, $i + 1, 1);
    return;
  }

  if ($i == 1 || $j == 1 || $i == $N || $j == $N || $i == $N - ($j - 1)) {
    echo 'X';
  } else {
    echo 'O';
  }

  generatePattern($N, $i, $j + 1);
}

// Input from user 
echo 'Masukkan nilai N : ';
$N = trim(fgets(STDIN));

if ($N % 2 === 0) {
  echo 'Output : Harus bilangan ganjil';
} else {
  // Generate pattern
  generatePattern($N);
}
