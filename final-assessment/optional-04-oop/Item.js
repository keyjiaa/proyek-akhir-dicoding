/**
 * TODO
 * Selesaikan kode pembuatan class Item dengan ketentuan:
 * - Memiliki properti `id` (number), `name` (string), `quantity` (number), dan `price` (number).
 * - Memiliki method `updateDetails()` untuk mengubah nilai `name`, `quantity`, dan `price`.
 * - Memiliki method `displayDetails()` yang mengembalikan informasi detail dari Item dengan format:
 *   ```
 *     ID: ${id}, Name: ${name}, Quantity: ${quantity}, Price: ${price}
 *   ```
 */

// Item.js
class Item {
    //Konatruktor untuk menginisialisasi properti item
    constructor(id, name, quantity, prince) {
        this.id = id; // ID unik untuk item
        this.name = name; // Nama item
        this.quantity = quantity; // Jumlah item yang tersedia
        this.price = price; // Harga item
    }
    
      // Metode untuk memperbarui detail item
    updateDetails(name, quantity, price) {
        this.name = name; // Memperbarui nama item
        this.quantity = quantity; // Memperbarui jumlah item
        this.price = price; // Memperbarui harga item
    }
    
      // Metode untuk menampilkan detail item dalam format string
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
    } 
}
// Mengekspor kelas Item agar dapat digunakan di berkas lain
export default Item;
