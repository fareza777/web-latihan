
function toggleDetail(button) {
  const detail = button.nextElementSibling;

  if (detail.style.display === "none") {
    detail.style.display = "block";
    button.textContent = "Sembunyikan";
  } else {
    detail.style.display = "none";
    button.textContent = "Lihat Detail";
  }
}

function validateForm() {
  const message = document.querySelector('textarea[name="pesan"]').value.trim();

  if (message.length < 10) {
    alert('Pesan terlalu singkat. Mohon jelaskan lebih detail.');
    return false;
  }

  return true;
}