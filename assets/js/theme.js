'use strict';

 const /**{NodeElment} */ $HTML = document.documentElement;
 const /**{Boolean} */ isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;


 if(sessionStorage.getItem('theme')) {
     $HTML.dataset.theme = sessionStorage.getItem('theme');
 } else {
     $HTML.dataset.theme = isDark ? 'dark' : 'light';
 }

  let /**{Boolean} */ isPressed = false;

const changenTheme = function()  {
    isPressed = isPressed ? false : true;
    this.setAttribute('aria-pressed', isPressed);
    $HTML.setAttribute('data-theme', ($HTML.dataset.theme === 'light') ? 'dark' : 'light');
    sessionStorage.setItem('theme', $HTML.dataset.theme);
    
};
/**Esta funcion sirve para controlar el cambio de tema */

window.addEventListener('load', () => {
    const /**{NodeElement} */ $themeBtn = document.querySelector('[data-theme-btn]');
    $themeBtn.addEventListener('click', changenTheme );
});


/**Este codigo sirve para el cambio de tema */