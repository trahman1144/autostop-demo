// WhatsApp button
document.getElementById('whatsapp-btn').onclick = function() {
  // Replace with the real WhatsApp number (e.g. 447900123456)
  const phone = "441582797797";
  window.open("https://wa.me/" + phone, "_blank");
}

// Book form basic JS
window.submitForm = function(e) {
  e.preventDefault();
  document.getElementById('form-msg').style.display = 'block';
  document.getElementById('form-msg').innerText = 'Thank you! Your booking request has been sent.';
  setTimeout(() => {
    document.getElementById('form-msg').style.display = 'none';
  }, 3800);
  e.target.reset();
  return false;
}

// Optional: highlight active nav on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-btn');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});
