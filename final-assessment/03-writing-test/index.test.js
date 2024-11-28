// Mengimpor modul yang diperlukan untuk pengujian
import { test } from 'node:test'; // Mengimpor fungsi test dari modul node:test
import assert from 'node:assert'; // Mengimpor modul assert untuk melakukan pemeriksaan
import { sum } from './index.js'; // Mengimpor fungsi sum dari berkas index.js

// Menguji penjumlahan dua angka positif
test('sum of 1 and 2 should be 3', () => {
  const result = sum(1, 2); // Memanggil fungsi sum dengan argumen 1 dan 2
  assert.strictEqual(result, 3); // Memastikan hasilnya adalah 3
});

// Menguji penjumlahan angka negatif dan positif
test('sum of -1 and 1 should be 0', () => {
  const result = sum(-1, 1); // Memanggil fungsi sum dengan argumen -1 dan 1
  assert.strictEqual(result, 0); // Memastikan hasilnya adalah 0
});

// Menguji penjumlahan dua angka nol
test('sum of 0 and 0 should be 0', () => {
  const result = sum(0, 0); // Memanggil fungsi sum dengan argumen 0 dan 0
  assert.strictEqual(result, 0); // Memastikan hasilnya adalah 0
});

// Menguji penjumlahan angka desimal
test('sum of 2.5 and 1.5 should be 4', () => {
  const result = sum(2.5, 1.5); // Memanggil fungsi sum dengan argumen 2.5 dan 1.5
  assert.strictEqual(result, 4); // Memastikan hasilnya adalah 4
});

// Menguji penjumlahan angka besar
test('sum of large numbers', () => {
  const result = sum(1000000, 2000000); // Memanggil fungsi sum dengan argumen 1000000 dan 2000000
  assert.strictEqual(result, 3000000); // Memastikan hasilnya adalah 3000000
});