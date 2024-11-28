// Mengimpor fungsi dan variabel dari berkas orders.js
import { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder } from './orders.js';

//Menambahkan pesanan untuk pelanggan Alice
addOrder('Alice', [
  { name: 'Nasi Goreng', price: 20000 }, //Item pertama
  { name: 'Teh Manis', price: 5000 } //Item kedua
]);

//Menambahkan pesanan untuk pelanggan Bob
addOrder('Bob', [
  { name: 'Mie Goreng', price: 15000 }, // Item pertama
  { name: 'Kopi', price: 10000 } // Item kedua
]);

//Menampilkan semua pesanan saat ini
console.log(orders);

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId1',
 *     customerName: 'Alice',
 *     items: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Menunggu'
 *   },
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Menunggu'
 *   }
 * ]
 */

// Memperbarui status pesanan Alice menjadi 'Diproses'
updateOrderStatus(orders[0].id, 'Diproses');
// Memperbarui status pesanan Bob menjadi 'Selesai'
updateOrderStatus(orders[1].id, 'Selesai');

// Menampilkan semua pesanan setelah status diperbarui
console.log(orders);

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId1',
 *     customerName: 'Alice',
 *     items: [
 *       { name: 'Nasi Goreng', price: 20000 },
 *       { name: 'Teh Manis', price: 5000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Diproses'
 *   },
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */

console.log(calculateTotalRevenue());
/**
 * Output yang diharapkan:
 * 25000
 */


deleteOrder(orders[0].id);

console.log(orders);

/**
 * Output yang diharapkan:
 * [
 *   {
 *     id: '_someUniqueId2',
 *     customerName: 'Bob',
 *     items: [
 *       { name: 'Mie Goreng', price: 15000 },
 *       { name: 'Kopi', price: 10000 }
 *     ],
 *     totalPrice: 25000,
 *     status: 'Selesai'
 *   }
 * ]
 */
