// assets/dropdown/dropdown.js
export function initDropdown(root = document) {
  root.querySelectorAll('.dropdown').forEach(dd => {
    const btn   = dd.querySelector('.dropbtn');
    const menu  = dd.querySelector('.dropdown-content');

    btn?.addEventListener('click', e => {
      e.stopPropagation();
      menu.classList.toggle('show');
    });
  });
}

// close when you click elsewhere
document.addEventListener('click', () =>
  document.querySelectorAll('.dropdown-content.show')
           .forEach(el => el.classList.remove('show')));
