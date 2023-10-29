const chevronBtns = document.querySelectorAll('.expand-btn');

chevronBtns.forEach((chevronBtn) => {
  chevronBtn.addEventListener('click', () => {
    const expandNumber = chevronBtn.getAttribute('data-expand');
    const chevronBtnId = `chevron-${expandNumber}`;
    const chevron = document.getElementById(chevronBtnId);
    const chevronIcon = document.getElementById(`chevron-icon-${expandNumber}`);
    const vertCenter = document.getElementById(`vert-center-${expandNumber}`);

    if (chevron) {
      const isRotated = chevron.classList.contains('chevron-down');

      if (isRotated) {
        chevronIcon.style.color = '';
        chevron.classList.remove('chevron-down');
        vertCenter.style.backgroundColor = 'transparent';
      } else {
        chevronIcon.style.color = 'white';
        chevron.classList.add('chevron-down');
        vertCenter.style.backgroundColor = 'red';
      }
    }
  });
});