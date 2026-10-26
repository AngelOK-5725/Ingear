const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const navOverlay = document.getElementById('navOverlay');
function closeMenu(){hamburger.classList.remove('active');navMenu.classList.remove('active');navOverlay.classList.remove('active');hamburger.setAttribute('aria-expanded','false');document.body.style.overflow='';}
function toggleMenu(){const open=!navMenu.classList.contains('active');hamburger.classList.toggle('active',open);navMenu.classList.toggle('active',open);navOverlay.classList.toggle('active',open);hamburger.setAttribute('aria-expanded',String(open));document.body.style.overflow=open?'hidden':'';}
hamburger.addEventListener('click',toggleMenu);navOverlay.addEventListener('click',closeMenu);document.querySelectorAll('.nav-link,.nav-cta').forEach(link=>link.addEventListener('click',closeMenu));document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const form=document.getElementById('contactForm');
form.addEventListener('submit',e=>{e.preventDefault();document.getElementById('formMessage').textContent='Спасибо! Мы свяжемся с вами и расскажем о пробном занятии.';form.reset();});
