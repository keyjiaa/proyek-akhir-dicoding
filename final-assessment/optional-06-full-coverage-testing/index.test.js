// Mengimpor modul yang diperlukan untuk pengujian
import { test, expect } from 'node:test'; // Mengimpor fungsi test dan expect dari modul test Node.js
import assert from 'node:assert'; // Mengimpor modul assert untuk melakukan pemeriksaan nilai
import sum from './index.js'; // Mengimpor fungsi sum dari berkas index.js

// Menguji fungsi sum dengan dua angka positif
test('sum with two positive numbers', () => {
  const result = sum(2, 3); // Memanggil fungsi sum dengan argumen 2 dan 3
  assert.strictEqual(result, 5); // Memastikan hasilnya adalah 5
});

// Menguji fungsi sum dengan nol dan angka positif
test('sum with zero and a positive number', () => {
  const result = sum(0, 5); // Memanggil fungsi sum dengan argumen 0 dan 5
  assert.strictEqual(result, 5); // Memastikan hasilnya adalah 5
});

// Menguji fungsi sum dengan dua nol
test('sum with two zeros', () => {
  const result = sum(0, 0); // Memanggil fungsi sum dengan argumen 0 dan 0
  assert.strictEqual(result, 0); // Memastikan hasilnya adalah 0
});

// Menguji fungsi sum dengan angka negatif dan angka positif
test('sum with a negative number and a positive number', () => {
  const result = sum(-1, 5); // Memanggil fungsi sum dengan argumen -1 dan 5
  assert.strictEqual(result, 0); // Memastikan hasilnya adalah 0
});

// Menguji fungsi sum dengan dua angka negatif
test('sum with two negative numbers', () => {
  const result = sum(-1, -5); // Memanggil fungsi sum dengan argumen -1 dan -5
  assert.strictEqual(result, 0); // Memastikan hasilnya adalah 0
});

// Menguji fungsi sum dengan angka negatif dan nol
test('sum with a negative number and zero', () => {
  const result = sum(-1, 0); // Memanggil fungsi sum dengan argumen -1 dan 0
  assert.strictEqual(result, 0); // Memastikan hasilnya adalah 0
});

// Menguji fungsi sum dengan input non-numerik
test('sum with non-numeric inputs', () => {
  const result1 = sum('a', 5); // Memanggil fungsi sum dengan argumen 'a' dan 5
  const result2 = sum(5, 'b'); // Memanggil fungsi sum dengan argumen 5 dan 'b'
  const result3 = sum('a', 'b'); // Memanggil fungsi sum dengan argumen 'a' dan 'b'
  assert.strictEqual(result1, 0); // Memastikan hasilnya adalah 0
  assert.strictEqual(result2, 0); // Memastikan hasilnya adalah 0
  assert.strictEqual(result3, 0); // Memastikan hasilnya adalah 0
});

// Menguji fungsi sum dengan angka besar
test('sum with large numbers', () => {
  const result = sum(1000000, 2000000); // Memanggil fungsi sum dengan argumen 1000000 dan 2000000
  assert.strictEqual(result, 3000000); // Memastikan hasilnya adalah 3000000
});