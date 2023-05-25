<?php
function validate($sandi): string
{
  $length = strlen($sandi);
  $isStartNum = is_numeric($sandi[0]);
  $isContainNum = preg_match('~[0-9]~', $sandi);
  $isContainUp = preg_match('~[A-Z]~', $sandi);
  $isContainLow = preg_match('~[a-z]~', $sandi);

  if ($length >= 8 && $length <= 32) {
    if ($isStartNum) {
      return 'Karakter awal tidak boleh angka';
    } elseif (!$isContainUp || !$isContainLow) {
      return 'Harus memiliki huruf kapital dan huruf kecil';
    } elseif (!$isContainNum) {
      return 'Harus memiliki angka';
    } else {
      return 'Kata sandi valid';
    }
  } else {
    return 'Panjang kata sandi harus antara 8 dan 32 karakter';
  }
}

// Input from user
echo 'Masukkan kata sandi : ';
$sandi = trim(fgets(STDIN));

// Validate input
echo 'Output : ' . validate($sandi);
