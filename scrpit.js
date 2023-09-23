const form = document.getElementById('form-hubungi');
const namaInput = document.getElementById('nama');
const emailInput = document.getElementById('email');
const pesanInput = document.getElementById('pesan');

// Validasi formulir ketika dikirim
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Mencegah pengiriman formulir standar

  // Validasi input
  if (!namaInput.value || !emailInput.value || !pesanInput.value) {
    alert('Harap isi semua bidang!');
  } else {
    // Kirim data formulir ke server (tambahkan kode pengiriman sesuai kebutuhan Anda)
    alert('Pesan berhasil dikirim!');
    form.reset(); // Reset formulir setelah pengiriman
  }
});
