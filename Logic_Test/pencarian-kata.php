<?php

// Input from user
echo "Masukkan teks yang mengandung kata-kata berikut (‘sang gajah’, ‘serigala’, ‘harimau’) : ";
$sentence = trim(fgets(STDIN));

$words = ['sang gajah', 'serigala', 'harimau'];
$res = [];
$ind = 0;

foreach ($words as $word) {
  $start = 0;
  $word = strtolower($word);
  $sentenceLower = strtolower($sentence);

  while (($pos = strpos($sentenceLower, $word, $start)) !== false) {
    $res[$ind] = $word;
    $start = $pos + strlen($word);
    $ind++;
  }
}

foreach ($res as $key => $item) {
  echo ($key == (sizeof($res) - 1)) ? $item . '' : $item . ' - ';
}
