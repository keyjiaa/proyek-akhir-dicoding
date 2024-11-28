function factorial(n) {
// Basis kasus: kembalikan n jika 0 atau 1
if (n === 0) return 0;
if (n === 1) return 1;
// Rekursi: jumlah dari dua bilangan sebelumnya
return fibonacci(n - 1) + fibonacci(n - 2);
}

// Jangan hapus kode di bawah ini!
export default factorial;
