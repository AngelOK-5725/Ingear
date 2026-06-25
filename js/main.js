// --- Гамбургер-меню ---
const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', toggleMenu);
navOverlay.addEventListener('click', closeMenu);

// Закрывать меню при клике на ссылку
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
});

// Закрывать по Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        closeMenu();
    }
});

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
