
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