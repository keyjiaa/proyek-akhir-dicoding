/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

// Inventory.js
class Inventory {
    // Konstruktor untuk menginisialisasi properti items sebagai array kosong
  constructor() {
    this.items = []; // Menampung daftar item dalam bentuk array
  }

  // Metode untuk menambahkan item ke dalam daftar
  addItem(item) {
    this.items.push(item); // Menambahkan item ke dalam array items
  }
  // Metode untuk menghapus item berdasarkan ID
  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id); // Menghapus item yang memiliki ID yang sama
  }

  // Metode untuk mengembalikan daftar item dalam format string
  listItems() {
    // Menggunakan map untuk mendapatkan detail setiap item dan menggabungkannya menjadi satu string
    return this.items.map(item => item.displayDetails()).join('\n');
  }
}


// Jangan hapus kode di bawah ini!
export default Inventory;
