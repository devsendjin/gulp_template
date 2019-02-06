(function() {
  const form = document.querySelector('.form');

  if (global.form.openFormBtn) {
    global.form.openFormBtn.addEventListener(
      'click',
      function(e) {
        e.preventDefault();

        if (global.form.formEl.classList.contains('is-hidden')) {
          global.form.openFormBtn.classList.add('arrow-down--rotate');
          global.form.open();
          return;
        }

        global.form.openFormBtn.classList.remove('arrow-down--rotate');
        global.form.close();
      },
      false
    );
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (global.form.isValid()) {
        console.log('All right');
      } else {
        console.log('Form is not valid');
      }
    });
  }

  if (global.navigation.nav) {
    global.navigation.nav.addEventListener('click', (e) => {
      e.preventDefault();
      const target = e.target;
      if (target.tagName.toLowerCase() !== 'a') {
        return;
      }
      global.navigation.toggleToActiveLink(target);
    });
  }
})();
