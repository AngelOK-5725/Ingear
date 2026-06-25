// --- Скролл к форме ---
function scrollToForm() {
    document.getElementById("form").scrollIntoView({ behavior: "smooth" });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("formMessage").innerText = 
        "Спасибо! Мы свяжемся с вами в ближайшее время.";
});

// --- Галерея ---
const track = document.querySelector('.gallery-track');
const imgs = document.querySelectorAll('.gallery-img');
let index = 0;

function showSlide(i) {
  track.style.transform = `translateX(-${i * 100}%)`;
}

document.querySelector('.gallery-btn.next').addEventListener('click', () => {
    index = (index + 1) % imgs.length;
    showSlide(index);
});

document.querySelector('.gallery-btn.prev').addEventListener('click', () => {
    index = (index - 1 + imgs.length) % imgs.length;
    showSlide(index);
});

// начальное состояние
showSlide(index);
