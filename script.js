// Filtro de Produtos
const buttons = document.querySelectorAll(".filter-buttons button");
const products = document.querySelectorAll(".product");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    products.forEach(product => {
      if (filter === "all" || product.getAttribute("data-category") === filter) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// Contagem Regressiva
const endDate = new Date("2024-12-31T23:59:59").getTime();
const countdownTimer = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = endDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("time").innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (timeLeft < 0) {
    clearInterval(countdownTimer);
    document.getElementById("time").innerText = "Promoção encerrada!";
  }
}, 1000);

// Botão de Voltar ao Topo
const backToTopButton = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
