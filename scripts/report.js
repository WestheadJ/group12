const openMenuButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('overlay');

openMenuButtons.forEach(button => {
  button.addEventListener('click', () => {
    const menu = document.querySelector(button.dataset.modalTarget);
    menu.classList.add('active');
    overlay.classList.add('active');
  });
});

overlay.addEventListener('click', () => {
  const menus = document.querySelectorAll('.report-menu.active');
  menus.forEach(menu => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
  });
});

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}