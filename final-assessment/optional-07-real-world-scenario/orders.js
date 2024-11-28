// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}


// Variabel untuk menyimpan data orders
let orders = []; //Inisialisasi array untuk menyimpan pesanan

// Fungsi untuk menambahkan pesanan
function addOrder(customerName, items) {
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0); // Menghitung total harga
  const newOrder = {
    id: generateUniqueId(), //Mengahasilkan ID unik
    customerName, //Menyimpan nama pelanggan
    items,// Menyimpan daftar item
    totalPrice,//Menyimpan total harga
    status: 'Menunggu' // Menyimpan status awal pesanan
};
orders.push(newOrder); //Menambahkan pesanan baru ke dalam
}
// Fungsi untuk memperbarui status pesanan
function updateOrderStatus(orderId, status) {
  const order = orders.find(order => order.id === orderId); // Mencari pesanan berdasarkan ID
  if (order) {
    order.status = status; // Memperbarui status pesanan
  }
}

// Fungsi untuk menghitung total pendapatan dari pesanan yang berstatus 'Selesai'
function calculateTotalRevenue() {
  return orders
    .filter(order => order.status === 'Selesai') // Menyaring pesanan yang sudah selesai
    .reduce((total, order) => total + order.totalPrice, 0); // Menghitung total pendapatan
}

// Fungsi untuk menghapus pesanan berdasarkan Id
function deleteOrder(id) {
  orders = orders.filter(order => order.id !== id); // Menghapus pesanan yang sesuai dengan ID
}

//Mengekspor variabel dan fungsi yang diperlukan
export { orders, addOrder, updateOrderStatus, calculateTotalRevenue, deleteOrder };
