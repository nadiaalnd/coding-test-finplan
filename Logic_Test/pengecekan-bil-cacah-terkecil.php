<?php
function findSmallNum($data): int
{
  $min = $start = min($data);
  $max = max($data);
  $status = false;
  $i = 0;
  while (!$status) {
    if (!in_array($start, $data)) {
      $status = true;
      return $start;
    }
    if ($start >= $max) {
      $status = true;
      return $start;
    }

    $start++;
  }
}

// Input from user
echo "Masukkan angka (pisahkan dengan koma): ";
$input = trim(fgets(STDIN));
$data = explode(",", $input);

$data = array_map('intval', $data);

$result = findSmallNum($data);
echo "Angka terkecil yang tidak ada dalam input: " . $result;
