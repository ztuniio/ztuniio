const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.querySelector('#year');
const orderForm = document.querySelector('#order-form');
const feedback = document.querySelector('#form-feedback');

if (year) {
  year.textContent = String(new Date().getFullYear());
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (orderForm && feedback) {
  orderForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(orderForm);
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').trim();
    const area = String(formData.get('area') || '').trim();
    const items = String(formData.get('items') || '').trim();

    if (!name || !phone || !area || !items) {
      feedback.textContent = 'Please fill all fields before sending.';
      return;
    }

    const text = `New Bringo order:%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AArea: ${encodeURIComponent(area)}%0AItems: ${encodeURIComponent(items)}`;
    const url = `https://wa.me/923097569951?text=${text}`;

    feedback.textContent = 'Opening WhatsApp with your order...';
    window.open(url, '_blank', 'noopener,noreferrer');
    orderForm.reset();
  });
}
